import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

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
  const priceData = req.body;
  
  // TODO:
  // passar os dados do carrinho pelo body da requisição
  // ao receber, diminuir a quantidade de cada item em seus respectivos estoques
  // criar um registro na tabela Pedido
  // criar um registro na tabela Entrega
  
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
    // allow_promotion_codes: true,
    cancel_url: process.env.STRIPE_CANCEL_URL!,
    success_url: process.env.STRIPE_SUCCESS_URL!,
  });

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
