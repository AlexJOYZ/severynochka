import { DATABASE } from './database';

export const getOrderDetailsByUserId = {
  path: '/orders',
  method: 'get',
  interceptors: {
    response: (_, { response, setStatusCode }) => {
      const { userId } = response.req.query;
      if (!userId) return { success: false, message: 'Пользователь не найден' };
      const user = DATABASE.users.filter((user) => user.id === +userId);
      if (!user) {
        setStatusCode(404);
        return { success: false, message: 'Пользователь не найден' };
      }
      const orders = DATABASE.orders.filter((order) => order.userId === +userId);
      return {
        success: true,
        message: 'Все заказы у данного пользователя отображены',
        orders,
      };
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
