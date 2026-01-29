import { Link, useLocation } from 'react-router-dom';

import { Typography } from '../components/UI/Typography/Typography';
import { ArrowButton } from '../components/UI/buttons/ArrowButton/ArrowButton';
import { ErrorIcon } from '../components/UI/icons/error/ErrorIcon';

import '../styles/pages/ErrorPage.css';

export const ErrorPage = () => {
  const location = useLocation();
  return (
    <div className='error__root'>
      <div className='error__content'>
        <ErrorIcon className='error__icon' />
        <Typography as='h1' variant='header' size='s' className='error__header'>
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
