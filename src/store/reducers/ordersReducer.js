const initialOrders = {
  orders: [],
};

const ADD_ORDER = 'ADD_ORDER';
const ADD_MANY_ORDERS = 'ADD_MANY_ORDERS';

export const orderReducer = (state = initialOrders, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case ADD_MANY_ORDERS:
      return { ...state, orders: [...state.orders, ...action.payload] };
    default:
      return state;
  }
};

export const addOrderAction = (order) => ({ type: ADD_ORDER, payload: order });
export const addManyOrdersAction = (orders) => ({ type: ADD_MANY_ORDERS, payload: orders });
