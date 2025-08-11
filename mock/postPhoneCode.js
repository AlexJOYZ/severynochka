import { DATABASE } from './database';

const removePhoneCode = (telephone) => {
  let index = 0;
  DATABASE.phoneCodes.forEach((code, i) => {
    if (code.telephone === telephone) index = i;
  });
  DATABASE.phoneCodes.splice(index, 1);
};

export const postPhoneCodeConfig = {
  path: '/createCode',
  method: 'post',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;
      const min = 10000;
      const max = 99999;
      const phoneCode = Math.floor(Math.random() * (max - min + 1)) + min;
      // const user = DATABASE.users.find((profile) => profile.tel === body.tel);
      // if (user) {
      //   setStatusCode(409);
      //   return { success: false, message: 'Пользователь с данным номером уже есть' };
      // }
      if (!body.telephone) {
        setStatusCode(404);
        return { success: false, message: 'Требуется номер телефона' };
      }
      const code = DATABASE.phoneCodes.find((code) => code.telephone === body.telephone);
      if (code) removePhoneCode(code.telephone);
      DATABASE.phoneCodes.push({
        id: DATABASE.phoneCodes.length + 1,
        code: phoneCode,
        telephone: body.telephone,
      });
      setStatusCode(201);
      setTimeout(() => removePhoneCode(body.telephone), 300000);
      return { success: true, message: 'Код успешно создан', code: phoneCode };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
