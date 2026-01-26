import { DATABASE } from './database';

export const postOrderDetailsConfig = {
  path: '/createOrder',
  method: 'post',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;
      const user = DATABASE.users.find((profile) => profile.id === body.userId);
      if (!user) {
        setStatusCode(404);
        return { success: false, message: 'Пользователь не найден' };
      }

      if (body.statusPayment === 'Оплата на сайте') {
      }

      DATABASE.orders.push({
        id: DATABASE.orders.length + 1,
        ...body,
        status: 'Новый',
      });
      setStatusCode(201);
      return { success: true, message: 'Заказ успешно создан' };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
