import '../../styles/App.css';

import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
