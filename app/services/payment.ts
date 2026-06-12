import Stripe from 'stripe';
const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
  apiVersion: '2022-11-15',
});
export async function processPayment(amount: number) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
  } catch (err) {
    throw new Error('خطأ في معالجة الدفع');
  }
}