import { api, refreshApi } from '../instance';

export class AuthService {
  static login = (email, password) => api.post('/signin', { email, password });

  static registration = (user) => api.post('/signup', user);
  static createPhoneCode = (user) => api.post('/createCode', user);

  static logout = () => api.get('/logout');

  static refresh = () => refreshApi.get('/refresh');
}
