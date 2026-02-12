import { thunk } from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { cartReducer } from './reducers/cartReducer';
import { accountReducer } from './reducers/accountReducer';
import { orderReducer } from './reducers/ordersReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  account: accountReducer,
  orders: orderReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// setInterval(() => console.log(store.getState()), 5000);
