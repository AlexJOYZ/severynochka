import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { ErrorPage } from './pages/ErrorPage';
import { Categories } from './pages/categories/Categories';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Vacancy } from './pages/Vacancy';
import { Orders } from './pages/Orders';
import { Cart } from './pages/Cart';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [{ element: <MainPage />, index: true }],
//   },
// ]);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/category' element={<Categories />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/vacancy' element={<Vacancy />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
