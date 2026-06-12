import { NextApiRequest, NextApiResponse } from 'next';
import { processPayment } from '../../services/payments';

const paymentsRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await processPayment(req.body);
      res.status(201).json({ message: 'Payment processed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error processing payment' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default paymentsRoute;