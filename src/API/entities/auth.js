import { api } from '../instance';

export class AuthService {
  static login = (email, password) => {
    return api.post('/signin', { email, password });
  };
  static registration = (user) => {
    return api.post('/signup', user);
  };
  static logout = () => {
    return api.get('/logout');
  };
  static refresh = ()=>{
    return api.get('/refresh')
  }
}
