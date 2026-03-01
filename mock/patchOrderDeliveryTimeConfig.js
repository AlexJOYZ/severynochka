import { DATABASE } from './database';

export const patchOrderDeliveryTimeConfig = {
  path: '/changeTimeOfDeliveryOrder',
  method: 'patch',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;
      if (!body.userId) return { success: false, message: 'Пользователь не найден' };
      const user = DATABASE.users.filter((user) => user.id === body.userId);
      if (!user) {
        setStatusCode(404);
        return { success: false, message: 'Пользователь не найден' };
      }
      const order = DATABASE.orders.forEach((order, i) => {
        if (order.id === body.id) {
          return (DATABASE.orders[i] = {
            ...order,
            dateOfDelivery: body.dateOfDelivery,
            timeOfDelivery: body.timeOfDelivery,
          });
        }
      });
      return {
        success: true,
        message: 'Дата и время доставки заказа были успешно изменены',
        order,
      };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
