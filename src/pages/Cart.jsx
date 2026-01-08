import { useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '../components/UI/Typography/Typography';
import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { ProductCardTable } from '../components/UI/cards/ProductCardTable/ProductCardTable';
import { Notice } from '../components/UI/notice/Notice';
import { Toggle } from '../components/UI/toggle/Toggle';

import { Checkbox } from '../components/UI/checkbox/Checkbox';
import { Button } from '../components/UI/buttons/Button/Button';

import '../styles/pages/Cart.css';
import { SmileIcon } from '../components/UI/icons/about/SmileIcon';
import { removeCartAction, removeManyCartAction } from '../store/reducers/cartReducer';

export const Cart = () => {
  const dispatch = useDispatch();

  const [isUsedCard, setIsUsedCard] = useState(true);
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);

  const user = useSelector((state) => state.account.user);
  const cartProducts = useSelector((state) => state.cart.items);

  const cartProductsUniq = useMemo(() => {
    const uniqIds = [];
    return cartProducts.filter((cartProduct) => {
      if (uniqIds.includes(cartProduct.id)) return false;
      uniqIds.push(cartProduct.id);
      return true;
    });
  }, [cartProducts]);
  const cartTotalPrice = useMemo(
    () =>
      cartProducts.reduce((accumulator, currentProduct) => accumulator + currentProduct.price, 0),
    [cartProducts],
  );
  const cartTotalPriceWithDiscount = useMemo(
    () =>
      cartProducts.reduce(
        (accumulator, currentProduct) =>
          accumulator +
          currentProduct.price -
          currentProduct.price * (currentProduct.discount / 100),
        0,
      ),
    [cartProducts],
  );

  const deleteSelectedCartProducts = () => {
    dispatch(removeManyCartAction(selectedProductsIds));
    setSelectedProductsIds([]);
  };

  console.log(selectedProductsIds);

  return (
    <MainContainer routes={['Главная', 'Корзина']}>
      <div>
        <div className='cart__title__inner'>
          <Typography as='h1' variant='header' size='xl'>
            Корзина
          </Typography>
          {cartProducts.length !== 0 && (
            <Notice accent='primary' size='m' className='cart__title__notice'>
              {cartProducts.length}
            </Notice>
          )}
        </div>
        <div className='cart__btns__container'>
          <div className='cart__btn__container cart__checkbox'>
            <Checkbox
              type='unstated'
              size='l'
              label='Выделить всё'
              setValue={setIsSelectedAll}
              value={isSelectedAll}
            />
          </div>
          <div className='cart__btn__container'>
            <Button
              onClick={() => deleteSelectedCartProducts()}
              accent='primary'
              size='s'
              decoration='no'
              type='text-btn'
            >
              Удалить выбранные
            </Button>
          </div>
        </div>
        <div className='cart__content'>
          <div className='cart__table'>
            {cartProducts.length !== 0 ? (
              cartProductsUniq.map((product) => (
                <ProductCardTable
                  key={product.id}
                  item={{
                    ...product,
                    isSelectedAll,
                    setIsSelectedAll,
                    setSelectedProductsIds,
                    selectedProductsIds,
                  }}
                />
              ))
            ) : (
              <Typography type='header' as='h2' size='m'>
                Корзина пуста
              </Typography>
            )}
          </div>
          {cartProducts.length !== 0 && (
            <div className='cart__panel'>
              <div className='cart__panel__top'>
                <Toggle
                  size='m'
                  value={isUsedCard}
                  setValue={setIsUsedCard}
                  label='Списать 200 ₽'
                />
                <Typography className='cart__panel__top__text' as='p' size='s'>
                  На карте накоплено 200 ₽
                </Typography>
              </div>
              <div className='cart__panel__middle'>
                <div className='cart__panel__middle__item'>
                  <Typography className='cart__panel__middle__item__text' as='p' size='s'>
                    {cartProductsUniq.length} товара
                  </Typography>
                  <Typography as='p' size='s'>
                    {cartTotalPrice.toFixed(2)} ₽
                  </Typography>
                </div>
                <div className='cart__panel__middle__item'>
                  <Typography className='cart__panel__middle__item__text' as='p' size='s'>
                    Скидка
                  </Typography>
                  <Typography
                    className='cart__panel__middle__item__discount'
                    as='p'
                    size='s'
                    variant='text-bold'
                  >
                    -{(cartTotalPrice - cartTotalPriceWithDiscount).toFixed(2)} ₽
                  </Typography>
                </div>
              </div>
              <div className='cart__panel__total'>
                <div className='cart__panel__total__price'>
                  <Typography as='p' size='s' variant='text'>
                    Итог
                  </Typography>
                  <Typography as='p' size='l' variant='text-bold'>
                    {cartTotalPriceWithDiscount.toFixed(2)} ₽
                  </Typography>
                </div>
                <div className='cart__panel__total__bonus'>
                  <SmileIcon className='cart__panel__total__bonus__icon' color='#70C05B' />
                  <Typography className='cart__panel__total__bonus__text' as='p' size='s'>
                    Вы получяете{' '}
                    <Typography
                      className='cart__panel__total__bonus__text'
                      as='span'
                      size='s'
                      variant='text-bold'
                    >
                      100 бонусов
                    </Typography>
                  </Typography>
                </div>
              </div>
              <Button disabled={true} size='l' accent='primary'>
                Оформить заказ
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
};
