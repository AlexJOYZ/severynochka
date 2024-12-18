import { Outlet } from 'react-router-dom';
import '../../styles/App.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
