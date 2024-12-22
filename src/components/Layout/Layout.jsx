import { Outlet } from 'react-router-dom';
import '../../styles/App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className='container'>
        <Footer />
      </div>
    </>
  );
};
