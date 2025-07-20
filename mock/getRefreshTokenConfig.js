import jwt from 'jsonwebtoken';

import { COOKIE } from '../src/const/cookies';
import { DATABASE } from './database';

const secretKey = 'MY_SECRET_KEY';

export const getRefreshTokenConfig = {
  path: '/refresh',
  method: 'get',
  interceptors: {
    response: (_, { getCookie, setStatusCode, setCookie }) => {
      const token = getCookie(COOKIE.REFRESH_TOKEN);

      if (!token) {
        setStatusCode(404);
        return { success: false, message: 'Требуется токен' };
      }

      const refreshToken = DATABASE.refreshTokens.find((refreshToken) => refreshToken.id === token);

      if (!refreshToken) {
        setStatusCode(401);
        return { success: false, message: 'Требуется токен' };
      }

      DATABASE.refreshTokens.filter((refreshToken) => token !== refreshToken.id);

      jwt.verify(token, secretKey, (err) => {
        if (err) {
          setStatusCode(401);
          return { success: false, message: 'Неверный токен' };
        }

        const user = DATABASE.users.find((profile) => profile.id === refreshToken.userId);

        if (!user) {
          setStatusCode(404);
          return { success: false, message: 'Пользователь не найден' };
        }
      });

      const payload = { userId: refreshToken.userId };
      const newAccessToken = jwt.sign(payload, secretKey, {
        expiresIn: '15m',
      });
      const newRefreshToken = jwt.sign({ id: Math.random() }, secretKey, {
        expiresIn: '15d',
      });
      DATABASE.refreshTokens.push({ id: newRefreshToken, userId: payload.userId });

      setCookie(COOKIE.ACCESS_TOKEN, newAccessToken, {
        httpOnly: true,
        maxAge: 9000,
        path: '/',
      });
      setCookie(COOKIE.REFRESH_TOKEN, newRefreshToken, {
        httpOnly: true,
        maxAge: 1296000000,
        path: '/',
      });
    },
  },
  routes: [{ data: null }],
};
