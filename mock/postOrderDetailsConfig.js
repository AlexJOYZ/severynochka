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
        DATABASE.users.forEach((profile, i) => {
          if (profile.id === body.userId && profile.cardDetails) {
            DATABASE.users[i] = {
              ...profile,
              cardBalance: profile.cardBalance - body.usedBonus + body.bonus,
            };
          }
        });
      }
      const order = { id: DATABASE.orders.length + 1, ...body, status: 'Новый' };
      DATABASE.orders.push(order);
      setStatusCode(201);
      return {
        success: true,
        message: 'Заказ успешно создан',
        order: order,
        user: DATABASE.users.find((profile) => profile.id === body.userId),
      };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
