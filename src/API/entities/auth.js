import { api } from '../instance';

export class AuthService {
  static login = (email, password) => api.post('/signin', { email, password });

  static registration = (user) => api.post('/signup', user);
  static createPhoneCode = (user) => api.post('/createCode', user);
  static confirmPhoneCode = (user)=>api.get('/confirmCode',user)

  static logout = () => {
    return api.get('/logout');
  };
  static refresh = () => {
    return api.get('/refresh');
  };
}
