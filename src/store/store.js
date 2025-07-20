import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { accountReducer } from './reducers/accountReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  cart: cartReducer,
  account: accountReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// setInterval(() => console.log(store.getState()), 5000);
