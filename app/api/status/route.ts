import { NextApiRequest, NextApiResponse } from 'next';

const statusRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  // إضافة منطق لاسترجاع حالة المشروع
  const projectStatus = 'جاري العمل';
  return res.status(200).json({ status: projectStatus });
};

export default statusRoute;