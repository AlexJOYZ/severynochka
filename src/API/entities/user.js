import { api } from '../instance';

export class UserService {
  static getAll = () => {
    return api.get('/');
  };

  static getUserById = () => {
    return;
  };

  static getProfile = () => {
    return api.get('/profile');
  };
}
