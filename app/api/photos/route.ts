import { NextApiRequest, NextApiResponse } from 'next';
import { photos } from '../../data/photos';

const photosRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json(photos);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default photosRoute;