import { COOKIE } from '../src/const/cookies';

const secretKey = import.meta.env.VITE_SECRET_KEY_JWT;

export const getLogoutConfig = {
  path: '/logout',
  method: 'get',
  interceptors: {
    response: (_, { getCookie, clearCookie, setStatusCode }) => {
      const token = getCookie(COOKIE.ACCESS_TOKEN);
      if (!token) {
        setStatusCode(401);
        return { success: false, message: 'Требуется токен' };
      }
      jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
          setStatusCode(401);
          return { success: false, message: 'Неверный токен' };
        }
        const user = DATABASE.users.find((profile) => profile.id === decode?.userId);

        if (!user) {
          setStatusCode(404);
          return { success: false, message: 'Пользователь не найден' };
        }
      });
      clearCookie(COOKIE.ACCESS_TOKEN);
    },
  },
  routes: [{ data: null }],
};
