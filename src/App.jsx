// import '..//styles/App.css'
import './styles/App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useQueryLazy } from './hooks';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { addUserAction } from './store/reducers/accountReducer';
import { UserService } from './API/entities/user';
import { OrderService } from './API/entities/order';
import { addManyOrdersAction } from './store/reducers/ordersReducer';
import { ROUTES } from './const';

import {
  About,
  Cart,
  Categories,
  Contacts,
  ErrorPage,
  Favorites,
  MainPage,
  Orders,
  Vacancies,
  Product,
  Category,
} from './pages';

import { Layout } from './components/Layout/Layout';
import { Spinner } from './components/UI/spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.account);

  const { query, isLoading: orderIsLoading } = useQueryLazy(
    'getOrders',
    (userId) => OrderService.getOrdersByUserId(userId),
    {
      onSuccess: (response) => {
        dispatch(addManyOrdersAction(response.data.orders));
      },
    },
  );
  const { isLoading: authIsLoading, error } = useQuery(
    'checkAuth',
    () => UserService.getProfile(),
    {
      onSuccess: (response) => {
        dispatch(addUserAction(response.data));
        query(response.data.id);
      },
    },
  );

  if (authIsLoading || orderIsLoading) return <Spinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.CATEGORIES} element={<Categories />} />
          <Route path={ROUTES.CATEGORY} element={<Category />} />
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.VACANCIES} element={<Vacancies />} />
          <Route path={ROUTES.ORDERS} element={<Orders />} />
          {isAuth && <Route path={ROUTES.CART} element={<Cart />} />}

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
