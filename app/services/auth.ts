import { verify } from 'jsonwebtoken';

const authService = {
  verifyToken: (token: string) => {
    try {
      const decoded = verify(token, 'secretKey');
      return decoded;
    } catch (error) {
      return null;
    }
  }
};

export default authService;