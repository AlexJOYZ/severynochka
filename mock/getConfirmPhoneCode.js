import { DATABASE } from './database';

export const getProfileByIdConfig = {
  path: '/confirmCode',
  method: 'get',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;
      const phoneCode = DATABASE.phoneCodes.find(
        (code) => code.telephone === body.telephone && code.code === +body.phoneCode,
      );
      if (!phoneCode) return {success: false, message: 'Требуется номер телефона'}
    },
  },
};
