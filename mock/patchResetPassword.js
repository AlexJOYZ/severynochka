import { DATABASE } from './database';

export const patchResetPassword = {
  path: '/resetPassword',
  method: 'patch',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;

      const phoneCode = DATABASE.phoneCodes.find(
        (code) => code?.telephone === body.telephone && code?.code === +body.phoneCode,
      );
      if (!phoneCode) {
        setStatusCode(404);
        return { success: false, message: 'Неверный код' };
      }
      const user = DATABASE.users.find((profile) => profile.telephone === body.telephone);
      if (!user) {
        setStatusCode(404);
        return { success: false, message: 'Пользователь не найден' };
      }
      DATABASE.users.forEach((profile, i) => {
        if (user.id === profile.id) {
          DATABASE.users[i] = { ...profile, password: body.password };
        }
      });
      return { success: true, message: 'Смена пароля успешна!' };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
