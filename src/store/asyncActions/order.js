import { addManyOrdersAction } from '../reducers/ordersReducer';
import { OrderService } from '../../API/entities/order';

export const getOrders = (userId) => async (dispatch) => {
  try {
    const { data } = await OrderService.getOrdersByUserId(userId);
    dispatch(addManyOrdersAction(data.orders));
  } catch (e) {
    console.log(e);
  }
};
