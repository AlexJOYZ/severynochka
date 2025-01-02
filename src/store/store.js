import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));


setInterval(()=>console.log(store.getState()),1000)
