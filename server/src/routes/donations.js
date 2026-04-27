import express, { Router } from 'express';
import Stripe from 'stripe';
import prisma from '../lib/prisma.js';

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-session', async (req, res) => {
  const { amount, isRecurring = false, donorName = 'Friend', donorEmail } = req.body;

  if (!amount || amount < 1) {
    return res.status(400).json({ error: 'Invalid donation amount.' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: isRecurring ? 'subscription' : 'payment',
      line_items: [{
        price_data: isRecurring ? undefined : {
          currency: 'usd',
          product_data: {
            name: 'Donation to I Am H.E.R.R',
            description: 'Supporting young women in the Bronx',
          },
          unit_amount: amount * 100,
        },
        ...(isRecurring ? {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Monthly Gift — I Am H.E.R.R' },
            unit_amount: amount * 100,
            recurring: { interval: 'month' },
          },
        } : {}),
        quantity: 1,
      }],
      success_url: `${process.env.CLIENT_URL}/donate?success=true`,
      cancel_url:  `${process.env.CLIENT_URL}/donate?cancelled=true`,
      customer_email: donorEmail,
      metadata: { donorName, isRecurring: String(isRecurring) },
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Failed to create checkout session.' });
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await prisma.donation.create({
      data: {
        donorName:       session.metadata.donorName || 'Anonymous',
        donorEmail:      session.customer_email || '',
        amount:          session.amount_total / 100,
        stripeSessionId: session.id,
        isRecurring:     session.metadata.isRecurring === 'true',
      },
    });
  }

  res.json({ received: true });
});

export default router;
