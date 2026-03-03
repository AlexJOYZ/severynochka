import { useState } from 'react';
import { useSelector } from 'react-redux';

import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { Typography } from '../components/UI/Typography/Typography';
import { Order } from '../components/Layout/Order/Order';
import { Button } from '../components/UI/buttons/Button/Button';

import '../styles/pages/Orders.css';

const limitPageWeight = 4;

export const Orders = () => {
  const orders = useSelector((state) => state.orders.items);

  const [limitPageOrders, setLimitPageOrders] = useState(1);
  const limitOrdersCount = limitPageOrders * limitPageWeight;

  return (
    <MainContainer className='orders__container' routes={['Главная', 'Заказы']}>
      <Typography as='h1' variant='header' size='xl' className='orders__header'>
        Заказы
      </Typography>
      <div className='orders__main'>
        {orders.length === 0 && (
          <Typography as='h4' variant='text-bold' size='m'>
            Заказов на данный момент нет
          </Typography>
        )}
        {orders.map((order, i) => i < limitOrdersCount && <Order key={i} order={order} />)}
      </div>
      {limitOrdersCount < orders.length && (
        <div className='orders__button__more'>
          <Button
            onClick={() => setLimitPageOrders((value) => value + 1)}
            accent='grayscale'
            size='l'
          >
            Показать ещё
          </Button>
        </div>
      )}
    </MainContainer>
  );
};
