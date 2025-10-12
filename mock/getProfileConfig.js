import jwt from 'jsonwebtoken';

import { COOKIE } from '../src/const/cookies';
import { DATABASE } from './database';

const secretKey = 'MY_SECRET_KEY';

export const getProfileConfig = {
  path: '/profile',
  method: 'get',
  interceptors: {
    response: (_, { getCookie, setStatusCode }) => {
      const token = getCookie(COOKIE.ACCESS_TOKEN);
      if (!token) {
        setStatusCode(401);
        return { success: false, message: 'Требуется токен' };
      }

      const user = jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
          setStatusCode(401);
          return { success: false, message: 'Неверный токен' };
        }

        const user = DATABASE.users.find((profile) => profile.id === decode?.userId);

        if (!user) {
          setStatusCode(404);
          return { success: false, message: 'Пользователь не найден' };
        }
        return user;
      });
      return user;
    },
  },
  routes: [{ data: null }],
};
