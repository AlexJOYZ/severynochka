// import '..//styles/App.css'
import './styles/App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from './hooks';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { checkAuth } from './store/asyncActions/auth';

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

import { ROUTES } from './const';

import { getOrders } from './store/asyncActions/order';

import { Layout } from './components/Layout/Layout';
import { Spinner } from './components/UI/spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();

  const { isLoading: authIsLoading, error } = useQuery('checkAuth', () => dispatch(checkAuth()));
  const { isAuth, user } = useSelector((state) => state.account);

  const { isLoading: ordersIsLoading } = useQuery([authIsLoading], () =>
    dispatch(getOrders(user.id)),
  );

  if (authIsLoading || ordersIsLoading) return <Spinner />;

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
