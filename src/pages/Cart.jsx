import { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { useMutation } from '../hooks';

import { OrderService } from '../API/entities/order';
import { REGIONS } from '../const';
import { cartValidateSchema } from '../utils/helpers';

import { Typography } from '../components/UI/Typography/Typography';
import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { Notice } from '../components/UI/notice/Notice';
import { Toggle } from '../components/UI/toggle/Toggle';
import { Button } from '../components/UI/buttons/Button/Button';
import { SmileIcon } from '../components/UI/icons/about/SmileIcon';
import { Tooltip } from '../components/UI/tooltip/Tooltip';
import { FillOrderDetails } from '../components/Layout/CartSteps/FillOrderDetails';
import { ChooseDateDelivery } from '../components/Layout/CartSteps/ChooseDateDelivery';
import { Spinner } from '../components/UI/spinner/Spinner';
import { ModalStatusMessage } from '../components/UI/modals/modalStatusMessage/ModalStatusMessage';

import '../styles/pages/Cart.css';

export const Cart = () => {
  const user = useSelector((state) => state.account.user);
  const statusPayment = useRef(null);

  const [step, setStep] = useState('fillOrderDetails');
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isUsedBonus, setIsUsedBonus] = useState(user.cardBalance !== 0);

  const times = [
    { title: '8:00 - 14:00' },
    { title: '14:00 - 18:00' },
    { title: '18:00 - 20:00', disabled: true, message: 'На это время доставить не можем' },
    { title: '20:00 - 22:00' },
  ];

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

  const cartPrice = +(
    user.cardDetails
      ? cartTotalPriceWithDiscount -
        (isUsedBonus ? Math.min(cartTotalPriceWithDiscount * 0.5, user.cardBalance) : 0)
      : cartTotalPrice
  ).toFixed(2);
  const locations = useMemo(
    () => REGIONS.filter((region) => region.value === user.address.region)[0].localities,
    [],
  );

  const {
    mutate: orderMutation,
    isLoading: orderIsLoading,
    error: orderError,
  } = useMutation('order', (body) => OrderService.createOrder(body), {
    onSuccess: (response) => {
      console.log(response);
      setIsModal(true);
      setModalData({ title: 'Успех', subTitle: 'Действие выполнено', type: 'success' });
    },
    onFailure: (e) => {
      console.log(response);
      setIsModal(true);
      setModalData({ title: 'Ошибка', subTitle: e?.message, type: 'failure' });
    },
  });

  const { state, functions } = useForm({
    initialValues: {
      location: locations[0],
      street: '',
      homeNumber: '',
      apartmentNumber: '',
      additionally: '',
      dateOfDelivery: new Date(),
      timeOfDelivery: times[0],
    },
    validateSchema: cartValidateSchema,
    onSubmit: () => {
      const order = {
        ...state.values,
        userId: user.id,
        userCardDetails: user.cardDetails,
        location: state.values.location.value,
        timeOfDelivery: state.values.timeOfDelivery.title,
        products: cartProducts,
        totalPrice: cartPrice,
        bonus: user.cardDetails ? +(cartPrice * 0.1).toFixed(2) : 0,
        usedBonus: isUsedBonus ? Math.min(cartTotalPriceWithDiscount * 0.5, user.cardBalance) : 0,
        statusPayment: statusPayment.current,
      };
      console.log(order);
      orderMutation(order);
    },
    validateOnChange: false,
  });

  return (
    <MainContainer className='cart__container' routes={['Главная', 'Корзина']}>
      <div>
        <div className='cart__title__inner'>
          <Typography className='d-f' as='h1' variant='header' size='xl'>
            {step === 'fillOrderDetails' ? 'Корзина' : 'Доставка'}
          </Typography>
          {cartProducts.length !== 0 && (
            <Notice accent='primary' size='m' className='cart__title__notice'>
              {cartProducts.length}
            </Notice>
          )}
        </div>
        <div className='cart__content'>
          {cartProducts.length === 0 && (
            <Typography type='header' as='h2' size='m'>
              Корзина пуста
            </Typography>
          )}
          {cartProducts.length !== 0 && step === 'fillOrderDetails' && (
            <FillOrderDetails cartProductsUniq={cartProductsUniq} />
          )}
          {cartProducts.length !== 0 && step === 'chooseDateDelivery' && (
            <ChooseDateDelivery
              locations={locations}
              state={state}
              functions={functions}
              tabs={times}
            />
          )}
          {cartProducts.length !== 0 && (
            <div className='cart__panel'>
              <div className='cart__panel__top'>
                <Toggle
                  disabled={user.cardBalance === 0}
                  size='m'
                  value={isUsedBonus}
                  setValue={setIsUsedBonus}
                  label='Использовать бонусы'
                />
                <Typography className='cart__panel__top__text' as='p' size='s'>
                  {user.cardDetails
                    ? `На карте накоплено ${user.cardBalance} ₽`
                    : 'У Вас нет бонусной карты'}
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
                {user.cardDetails && (
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
                )}

                {isUsedBonus && (
                  <div className='cart__panel__middle__item'>
                    <Typography className='cart__panel__middle__item__text' as='p' size='s'>
                      Бонусы
                    </Typography>
                    <Typography
                      className='cart__panel__middle__item__discount'
                      as='p'
                      size='s'
                      variant='text-bold'
                    >
                      -{Math.min(cartTotalPriceWithDiscount * 0.5, user.cardBalance)} ₽
                    </Typography>
                  </div>
                )}
              </div>
              <div className='cart__panel__total'>
                <div className='cart__panel__total__price'>
                  <Typography as='p' size='s' variant='text'>
                    Итог
                  </Typography>
                  <Typography as='p' size='l' variant='text-bold'>
                    {cartPrice} ₽
                  </Typography>
                </div>
                {user.cardDetails && (
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
                        {(cartPrice * 0.1).toFixed(2)} бонусов
                      </Typography>
                    </Typography>
                  </div>
                )}
              </div>
              {step === 'fillOrderDetails' && (
                <Tooltip
                  direction='down'
                  isShowTooltip={cartPrice < 1000}
                  label='Минимальная сумма заказа 1000р'
                  isWithIcon={false}
                  className='cart__panel__tooltip'
                >
                  <Button
                    onClick={() => setStep('chooseDateDelivery')}
                    disabled={cartPrice < 1000}
                    size='l'
                    accent='primary'
                  >
                    Оформить заказ
                  </Button>
                </Tooltip>
              )}
              {step === 'chooseDateDelivery' && (
                <div className='cart__panel__btns'>
                  <Button
                    onClick={(e) => {
                      statusPayment.current = 'Оплата на сайте';
                      functions.handleSubmit(e, 'region', 'dateOfDelivery', 'timeOfDelivery');
                    }}
                    disabled={cartPrice < 1000}
                    size='l'
                    accent='primary'
                  >
                    Оплатить на сайте
                  </Button>
                  <Button
                    onClick={(e) => {
                      statusPayment.current = 'Оплата при получении';
                      functions.handleSubmit(e, 'region', 'dateOfDelivery', 'timeOfDelivery');
                    }}
                    disabled={cartPrice < 1000}
                    size='m'
                    accent='secondary'
                  >
                    Оплатить при получении
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {orderIsLoading && <Spinner />}
      {isModal && (
        <ModalStatusMessage
          title={modalData?.title}
          subTitle={modalData?.subTitle}
          setIsModal={setIsModal}
          type={modalData?.type}
        />
      )}
    </MainContainer>
  );
};
