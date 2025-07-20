import { DATABASE } from './database';

export const postSignUpConfig = {
  path: '/signup',
  method: 'post',
  interceptors: {
    response: (_, { request, setStatusCode }) => {
      const { body } = request;

      DATABASE.users.push({
        ...body,
        id: DATABASE.users.length + 1,
        role: 'user',
      });
      setStatusCode(201);
    },
  },
  routes: [
    {
      data: { success: true },
    },
  ],
};
