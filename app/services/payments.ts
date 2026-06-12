import Stripe from 'stripe';

const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
  apiVersion: '2022-11-15',
});

export const processPayment = async (paymentData: any) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return paymentIntent;
  } catch (error) {
    throw error;
  }
};