import '../styles/pages/ErrorPage.css';

import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../components/UI/Typography/Typography';
import { ArrowButton } from '../components/UI/buttons/ArrowButton/ArrowButton';

export const ErrorPage = () => {
  const location = useLocation();
  return (
    <div className='modal'>
      <div className='modal__content'>
        <Typography as='h1' variant='header' size='s' className='error-header h'>
          Ошибка 404
        </Typography>
        <Typography as='i' variant='text' size='m'>
          Запрашиваемая страница адресу:{' '}
          <Typography as='span' size='m' variant='text-bold'>
            {location.pathname}
          </Typography>{' '}
          не существует или была перемещена. Возможно, ты перешел по устаревшей ссылке или ввел
          неправильный адрес.
        </Typography>

        <Link to='/'>
          <ArrowButton accent='primary' size='m'>
            Перейти на главную
          </ArrowButton>
        </Link>
      </div>
    </div>
  );
};
