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
      const order = DATABASE.orders.find((order) => order.id === body.id);
      if (!order) {
        setStatusCode(404);
        return { success: false, message: 'Заказ не найден' };
      }
      DATABASE.orders.forEach((order, i) => {
        if (order.id === body.id) {
          DATABASE.orders[i] = {
            ...order,
            dateOfDelivery: body.dateOfDelivery,
            timeOfDelivery: body.timeOfDelivery,
          };
        }
      });
      const changedOrder = DATABASE.orders.find((order) => order.id === body.id);
      return {
        success: true,
        message: 'Дата и время доставки заказа были успешно изменены',
        order: changedOrder,
      };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
