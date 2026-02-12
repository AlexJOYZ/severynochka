export const getOrderDetailsByUserId = {
  path: '/orders',
  method: 'get',
  interceptors: {
    response: (_, { response, setStatusCode }) => {
      const { body } = response;
    },
  },
};
