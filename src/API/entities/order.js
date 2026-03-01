import { api } from '../instance';

export class OrderService {
  static createOrder = (order) => api.post('createOrder', order);
  static getOrdersByUserId = (userId) => api.get('/orders?userId=' + userId);
  static changeDeliveryTimeAndDateOrder = (order) => api.patch('/changeTimeOfDeliveryOrder', order);
}
