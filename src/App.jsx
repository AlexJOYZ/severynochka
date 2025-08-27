// import '..//styles/App.css'
import './styles/App.css'


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
} from './pages';

import { Layout } from './components/Layout/Layout';
import { Spinner } from './components/UI/spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useQuery('checkAuth', () => dispatch(checkAuth()));

  if (isLoading) return <Spinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='categories' element={<Categories />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='vacancy' element={<Vacancy />} />
          <Route path='orders' element={<Orders />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
