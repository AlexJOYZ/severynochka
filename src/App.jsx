import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ element: <MainPage />, index: true }],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
