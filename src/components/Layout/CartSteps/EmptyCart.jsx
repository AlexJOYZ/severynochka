import { Link } from 'react-router-dom';

import { ROUTES } from '../../../const';

import { CartEmptyIcon } from '../../UI/icons/cart/CartEmptyIcon';
import { Typography } from '../../UI/Typography/Typography';
import { ArrowButton } from '../../UI/buttons/ArrowButton/ArrowButton';

export const EmptyCart = () => {
  return (
    <div className='cart__empty__container'>
      <div className='cart__empty__content'>
        <CartEmptyIcon size={200} />
        <Typography type='header' as='h2' size='m'>
          В вашей корзине пока пусто
        </Typography>
        <Typography type='text' as='p' size='m'>
          Тут появятся товары, которые вы закажите
        </Typography>
        <Link to={ROUTES.CATEGORIES}>
          <ArrowButton accent='primary' size='m'>
            В каталог
          </ArrowButton>
        </Link>
      </div>
    </div>
  );
};
