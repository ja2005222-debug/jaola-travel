import { NextApiRequest, NextApiResponse } from 'next';
import { readdirSync } from 'fs';
import path from 'path';

const filesRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const files = readdirSync('./public/files');
  res.json(files);
};

export default filesRoute;