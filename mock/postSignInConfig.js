import jwt from 'jsonwebtoken';

import { DATABASE } from './database';
import { COOKIE } from '../src/const/cookies';

const secretKey = 'MY_SECRET_KEY';

export const postSignInConfig = {
  path: '/signin',
  method: 'post',

  interceptors: {
    response: (_, { request, setCookie, setStatusCode }) => {
      const { body } = request;

      const user = DATABASE.users.find(
        (profile) => profile.email === body.email && profile.password === body.password,
      );
      if (!user) {
        setStatusCode(404);
        return { success: false, message: 'Пользователь не найден' };
      }

      const payload = { userId: user.id };
      const accessToken = jwt.sign(payload, secretKey, { expiresIn: '15m' });
      const refreshToken = jwt.sign({ id: Math.random() }, secretKey, { expiresIn: '15d' });

      DATABASE.refreshTokens.push({ userId: user.id, id: refreshToken });

      setCookie(COOKIE.ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        maxAge: 900000,
        path: '/',
      });
      setCookie(COOKIE.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        maxAge: 1296000000,
        path: '/',
      });

      return { ...user, accessToken};
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
