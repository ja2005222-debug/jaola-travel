import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../types';

const posts: Post[] = [
  { id: 1, title: 'رحلة إلى باريس', content: 'باريس مدينة جميلة' },
  { id: 2, title: 'رحلة إلى روما', content: 'روما مدينة تاريخية' },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(posts);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}