import { removeProductFromCart } from '../../utils/removeProductFromCart';

const initialCart = {
  items: [],
};

const ADD_CART = 'ADD_CART';
const REMOVE_CART = 'REMOVE_CART';

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_CART:
      return { ...state, items: removeProductFromCart(state.items, action.payload) };
    default:
      return state;
  }
};

export const addCartAction = (product) => ({ type: ADD_CART, payload: product });
export const removeCartAction = (id) => ({ type: REMOVE_CART, payload: id });
