import { Link, useRouteError } from 'react-router-dom';
import { Typography } from '../components/UI/Typography/Typography';
import '../styles/pages/ErrorPage.css';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='modal'>
      <div className='modal__content'>
        <Typography as='h1' variant='header' size='m' className='error-header h'>
          Error!
        </Typography>
        <Typography as='h2' variant='text-bold' size='m'>{error.status}</Typography>
        <Typography as='i' variant='text' size='m'>{error.data}</Typography>
        <Typography as='h3' variant='text-bold' size='s'> Please return to <Link to='/'>Home</Link></Typography>
      </div>
    </div>
  );
};
