import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config();

const routes = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: "redsaju",
  },
});

routes.post('/checkout', async (req, res) => {
  const priceData = req.body;
  
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

  return res.status(200).json({ sessionId: stripeCheckoutSession.id });
});

export default routes;
