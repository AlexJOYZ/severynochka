// import '..//styles/App.css'
import './styles/App.css';

import { useDispatch } from 'react-redux';
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
  Vacancy,
  Product
} from './pages';

import { Layout } from './components/Layout/Layout';
import { Spinner } from './components/UI/spinner/Spinner';
import { ROUTES } from './const';

export const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useQuery('checkAuth', () => dispatch(checkAuth()));

  if (isLoading) return <Spinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.CATEGORIES} element={<Categories />} />
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.VACANCY} element={<Vacancy />} />
          <Route path={ROUTES.ORDERS} element={<Orders />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
