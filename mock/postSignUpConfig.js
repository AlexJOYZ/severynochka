import jwt from 'jsonwebtoken';

import { COOKIE } from '../src/const/cookies';
import { DATABASE } from './database';
import { secretKey } from './getRefreshTokenConfig';

export const postSignUpConfig = {
  path: '/signup',
  method: 'post',
  interceptors: {
    response: (_, { request, setStatusCode, setCookie }) => {
      const { body } = request;

      const phoneCode = DATABASE.phoneCodes.find(
        (code) => code?.telephone === body.telephone && code?.code === +body.phoneCode,
      );
      if (!phoneCode) {
        setStatusCode(404);
        return { success: false, message: 'Неверный код' };
      }

      const user = DATABASE.users.find(
        (profile) =>
          profile.telephone === body.telephone || (profile.email === body.email && !!profile.email),
      );

      if (user) {
        setStatusCode(409);
        return { success: false, message: 'Пользователь с этими данными уже зарегистрирован!' };
      }
      const id = DATABASE.users.length + 1;
      const newUser = { ...body, id, role: 'user', cardBalance: 0 };
      delete newUser.phoneCode;

      DATABASE.users.push(newUser);
      
      const payload = { userId: id };
      const accessToken = jwt.sign(payload, secretKey, {
        expiresIn: '15m',
      });
      const refreshToken = jwt.sign({ id: Math.random() }, secretKey, {
        expiresIn: '15d',
      });
      DATABASE.refreshTokens.push({ id: refreshToken, userId: payload.userId });

      setCookie(COOKIE.ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        maxAge: 300000,
        path: '/',
      });
      setCookie(COOKIE.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        maxAge: 1296000000,
        path: '/',
      });
      setStatusCode(201);
      return { success: true, message: 'Регистрация успешна!', user: newUser };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
