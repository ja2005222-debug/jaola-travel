import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

const authRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    // قم بتحقق من بيانات تسجيل الدخول
    const token = verify(username, password);
    if (token) {
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'خطأ في تسجيل الدخول' });
    }
  } else {
    return res.status(405).json({ message: 'طريقة غير مسموح بها' });
  }
};

export default authRoute;