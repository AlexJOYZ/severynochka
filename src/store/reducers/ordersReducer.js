const initialOrders = {
  items: [],
};

const ADD_ORDER = 'ADD_ORDER';
const ADD_MANY_ORDERS = 'ADD_MANY_ORDERS';
const CHANGE_ORDER = 'CHANGE_ORDER';

export const orderReducer = (state = initialOrders, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, items: [...state.items, action.payload] };
    case ADD_MANY_ORDERS:
      return { ...state, items: [...state.items, ...action.payload] };
    case CHANGE_ORDER:
      return {
        ...state,
        items: state.items.map((order) => {
          if (order.id === action.payload.id) return action.payload;
          else return order;
        }),
      };
    default:
      return state;
  }
};

export const addOrderAction = (order) => ({ type: ADD_ORDER, payload: order });
export const addManyOrdersAction = (orders) => ({ type: ADD_MANY_ORDERS, payload: orders });
export const changeOrderAction = (newOrder) => ({ type: CHANGE_ORDER, payload: newOrder });
