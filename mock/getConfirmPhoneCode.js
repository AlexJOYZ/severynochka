// import { DATABASE } from './database';

// export const getConfirmPhoneCode = {
//   path: '/confirmCode',
//   method: 'post',
//   interceptors: {
//     response: (_, { request, setStatusCode }) => {
//       const { body } = request;
//       const phoneCode = DATABASE.phoneCodes.find(
//         (code) => code?.telephone === body.telephone && code?.code === +body.phoneCode,
//       );
//       if (!phoneCode) {
//         setStatusCode(404);
//         return { success: false, message: 'Неверный код' };
//       }
//       setStatusCode(200);
//       return { success: true, message: 'Верный код' };
//     },
//   },
//   routes: [
//     {
//       data: { success: true },
//     },
//   ],
// };
