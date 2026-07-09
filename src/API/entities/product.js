import { api } from '../instance';

export class ProductService {
  static getAllFiltered = (filters = '') => api.get('/products' + filters);
}
