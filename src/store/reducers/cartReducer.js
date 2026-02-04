import { removeProductFromCart } from '../../utils/removeProductFromCart';

const initialCart = {
  items: [],
};

const ADD_CART = 'ADD_CART';
const REMOVE_CART = 'REMOVE_CART';
const REMOVE_MANY_CART = 'REMOVE_MANY_CART';
const CLEAR_CART = 'CLEAR_CART';

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_CART:
      return { ...state, items: [...removeProductFromCart(state.items, action.payload)] };
    case REMOVE_MANY_CART:
      return { ...state, items: state.items.filter((item) => !action.payload.includes(item.id)) };
    case CLEAR_CART:
      return { items: [] };
    default:
      return state;
  }
};

export const addCartAction = (product) => ({ type: ADD_CART, payload: product });
export const removeCartAction = (id) => ({ type: REMOVE_CART, payload: id });
export const removeManyCartAction = (mas) => ({ type: REMOVE_MANY_CART, payload: mas });
export const clearCartAction = () => ({ type: CLEAR_CART });
