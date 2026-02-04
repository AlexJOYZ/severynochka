import { useQuery } from '../hooks';

import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { Typography } from '../components/UI/Typography/Typography';
import { Spinner } from '../components/UI/spinner/Spinner';
import { Order } from '../components/Layout/Order/Order';

import '../styles/pages/Orders.css'

export const Orders = () => {
  // const { isLoading, data } = useQuery('', () => console.log(1));

  const orders = [
    {
      id: 1,
      location: 'г. Горно-Алтайск',
      street: 'sadas',
      homeNumber: '12',
      apartmentNumber: '11',
      additionally: '',
      dateOfDelivery: '2026-01-30T11:00:55.458Z',
      timeOfDelivery: '8:00 - 14:00',
      userId: 4,
      userCardDetails: null,
      products: [
        {
          title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон',
          id: 2,
          imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
          isFavorite: false,
          rating: 4.8,
          price: 605,
          discount: 20,
        },
        {
          title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон',
          id: 2,
          imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
          isFavorite: false,
          rating: 4.8,
          price: 605,
          discount: 20,
        },
        {
          title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон',
          id: 2,
          imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
          isFavorite: false,
          rating: 4.8,
          price: 605,
          discount: 20,
        },
        {
          title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон',
          id: 2,
          imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
          isFavorite: false,
          rating: 4.8,
          price: 605,
          discount: 20,
        },
        {
          title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон',
          id: 2,
          imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
          isFavorite: false,
          rating: 4.8,
          price: 605,
          discount: 20,
        },
      ],
      totalPrice: 3025,
      bonus: 0,
      usedBonus: 0,
      statusPayment: 'Оплата на сайте',
      status: 'Новый',
    },
  ];

  return (
    <MainContainer routes={['Главная', 'Заказы']}>
      <Typography as='h1' variant='header' size='xl' className="orders__header">
        Заказы
      </Typography>
      <div className='orders__main'>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
      {/* {isLoading && <Spinner />} */}
    </MainContainer>
  );
};
