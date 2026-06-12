import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await authenticate(req, res);
}