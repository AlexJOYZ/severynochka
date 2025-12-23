import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Typography } from '../components/UI/Typography/Typography';
import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { ProductCardTable } from '../components/UI/cards/ProductCardTable/ProductCardTable';
import { Notice } from '../components/UI/notice/Notice';
import { Toggle } from '../components/UI/toggle/Toggle';

import '../styles/pages/Card.css';
import { Checkbox } from '../components/UI/checkbox/Checkbox';
import { Button } from '../components/UI/buttons/Button/Button';

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.items);
  const cartProductsUniq = Array.from(new Set(cartProducts));

  const [isUsedCard, setIsUsedCard] = useState(true);
  const [isSelectedAll, setIsSelectedAll] = useState(true);
  // const user = useSelector((state) => state.account.user);

  // const dispatch = useDispatch();

  return (
    <MainContainer routes={['Главная', 'Корзина']}>
      <div>
        <div className='cart__title__inner'>
          <Typography as='h1' variant='header' size='xl'>
            Корзина
          </Typography>
          {cartProducts.length !== 0 && (
            <Notice accent='primary' size='m' className='card__title__notice'>
              {cartProducts.length}
            </Notice>
          )}
        </div>
        <div className='cart__btn__container'>
          <Checkbox
            type='unstated'
            size='l'
            label='Выделить всё'
            setValue={setIsSelectedAll}
            value={isSelectedAll}
          />
          <Button accent='primary' size='s' decoration='no' type='text-btn'>
            Удалить выбранные
          </Button>
        </div>
        <div className='cart__content'>
          <div className='cart__table'>
            {cartProducts.length !== 0 ? (
              cartProductsUniq.map((product) => <ProductCardTable item={product} />)
            ) : (
              <Typography type='header' as='h2' size='m'>
                Корзина пуста
              </Typography>
            )}
          </div>
          <div className='cart__panel'>
            <Toggle size='m' value={isUsedCard} setValue={setIsUsedCard} label='Списать 200 ₽' />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
