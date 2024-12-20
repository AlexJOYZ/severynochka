import { Outlet } from 'react-router-dom';
import '../../styles/App.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

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
