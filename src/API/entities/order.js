import { api } from '../instance';

export class OrderService {
  static createOrder = (order) => api.post('createOrder', order);
}
