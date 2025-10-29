import { api, refreshApi } from '../instance';

export class AuthService {
  static login = (user) => api.post('/signin', user);
  static registration = (user) => api.post('/signup', user);

  static resetPassword = (user)=> api.patch('/resetPassword',user)

  static createPhoneCode = (user) => api.post('/createCode', user);

  static logout = () => api.get('/logout');

  static refresh = () => refreshApi.get('/refresh');
}
