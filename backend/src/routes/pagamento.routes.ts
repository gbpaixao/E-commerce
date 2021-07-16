import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateItemPedidoService } from '../services/CreateItemPedidoService';
import { CreatePedidoService } from '../services/CreatePedidoService';
import { CreateCarrinhoService } from '../services/CreateCarrinhoService';
import { CreatePagamentoService } from '../services/CreatePagamentoService';
import { GetIdsService } from '../services/GetIdsService';
import { UpdateCamisaEstoqueService } from '../services/UpdateCamisaEstoqueService';
import { ListCamisasService } from '../services/ListCamisasService';
import { CreateEntregaService } from '../services/CreateEntregaService';
import { UpdatePedidoService } from '../services/UpdatePedidoService';

dotenv.config();

const routes = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: "redsaju",
  },
});

routes.get('/public-key', (req, res) => {
  res.send(process.env.STRIPE_PUBLIC_KEY)
});

routes.post('/checkout', ensureAuthenticated, async (req, res) => {
  const {carrinho, idCliente, priceData} = req.body;
  
  const createPedidoService = new CreatePedidoService();
  const createCarrinhoService = new CreateCarrinhoService();
  const createItemPedidoService = new CreateItemPedidoService();
  const createPagamentoService = new CreatePagamentoService();

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    billing_address_collection: "required",
    line_items: [{
      price_data: {
        currency: 'brl',
        ...priceData
      },
      quantity: 1,
    }],
    mode: "payment",
    cancel_url: process.env.STRIPE_CANCEL_URL!,
    success_url: process.env.STRIPE_SUCCESS_URL!,
  });

  const Pagamento_idPagamento = await createPagamentoService.execute({
    idPagamento: stripeCheckoutSession.id,
    pagamentoEfetuado: false
  });

  const Pedido_idPedido = await createPedidoService.execute({
    status: 'Em processamento',
    valorTotal: priceData.unit_amount / 100,
    dataCompra: new Date(),
    desconto: 0,
    Cliente_idCliente: idCliente,
    Pagamento_idPagamento,
  });

  const carrinhoId = await createCarrinhoService.execute({
    Pedido_idPedido,
  });

  for (const item of carrinho) {
    await createItemPedidoService.execute({
      Camisa_idCamisa: item.camisa.id,
      Carrinho_idCarrinho: carrinhoId,
      nomeJogador: item.nomeJogador,
      numeroJogador: item.numeroJogador,
      quantidade: item.quantidade,
      valorTotal: item.camisa.valor * item.quantidade
    })
  }
  
  console.log('checkout session: ', stripeCheckoutSession.id);
  
  return res.status(200).json({ sessionId: stripeCheckoutSession.id });
});

routes.post('/webhooks',async (req, res) => {
  const getIdsService = new GetIdsService();
  const updateCamisaEstoqueService = new UpdateCamisaEstoqueService();
  const listCamisasService = new ListCamisasService();
  const createEntregaService = new CreateEntregaService();
  const updatePedidoService = new UpdatePedidoService();
  
  const event: Stripe.Event = req.body;

  switch(event.type) {
    case 'checkout.session.completed': {
      const checkoutSession = event.data.object as Stripe.Charge;

      const ids = await getIdsService.execute(checkoutSession.id);

      for (const id of ids) {
        const camisa = await listCamisasService.execute(id.Camisa_idCamisa)
        
        await updateCamisaEstoqueService.execute(
          id.Camisa_idCamisa, 
          camisa.estoque - id.quantidade
        );
      }

      const diaParaSegundos = 24 * 60 * 60;
      const previsaoEntrega = new Date().getTime() + (diaParaSegundos * 1000 * 15) ;
      
      const Entrega_idEntrega = await createEntregaService.execute({
        codigoRastreio: `BR${Math.floor(Math.random() * 1000000)}`,
        formaEnvio: 'Correios',
        previsaoEntrega: new Date(previsaoEntrega),
        status: 'loja',
        valorFrete: 30.5
      });
      
      await updatePedidoService.execute(ids[0].idPedido, {
        status: 'Ativo',
        Entrega_idEntrega
      });

      break;
    }
  }

  res.json({received: true});
});

export default routes;
