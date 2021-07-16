import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateItemPedidoService } from '../services/CreateItemPedidoService';
import { CreatePedidoService } from '../services/CreatePedidoService';
import { CreateCarrinhoService } from '../services/CreateCarrinhoService';
import { CreatePagamentoService } from '../services/CreatePagamentoService';

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
  console.log('evento recebido')
  
  const event: Stripe.Event = req.body;

  switch(event.type) {
    case 'checkout.session.completed': {
      const checkoutSession = event.data.object;

      console.log('Event: ', checkoutSession);
      
      break;
    }
  }

  res.json({received: true});
});

export default routes;
