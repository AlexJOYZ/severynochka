import '../styles/pages/MainPAge.css';

import { Banner } from '../components/UI/banner/Banner';
import { Section } from '../components/Layout/Section/SectionProducts';
import { SpecialOffers } from '../components/Layout/SpecialOffers/SpecialOffers';
import { MapSection } from '../components/Layout/MapSection/MapSection';

export const MainPage = () => {
  const sectionPromotion = {
    title: 'Акции',
    titleBtn: 'акции',
    items: [
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 1,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
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
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 3,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 50,
      },
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 4,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
      },
    ],
  };
  const sectionNovelty = {
    title: 'Новинки',
    titleBtn: 'новинки',
    items: [
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 1,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
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
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 3,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 50,
      },
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 4,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
      },
    ],
  };
  const sectionBuy = {
    title: 'Покупали раньше',
    titleBtn: 'покупки',
    items: [
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 1,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
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
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 3,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 50,
      },
      {
        title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        id: 4,
        imgUrl: 'https://i.postimg.cc/HLpW4shS/image.jpg',
        isFavorite: true,
        rating: 4,
        price: 65,
        discount: 0,
      },
    ],
  };

  const sectionNews = {
    title: 'Статьи',
    titleBtn: 'статьи',
    items: [
      {
        id: 1,
        title: 'Режим использования масок и перчаток на территории магазинов',
        subTitle:
          'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
        imgUrl: 'https://i.postimg.cc/wx5h4ZKd/image-5.png',
        date:'2024-12-05T08:41:00Z'
      },
      {
        id: 2,
        title: 'Весеннее настроение для каждой',
        subTitle:
          '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
        imgUrl: 'https://i.postimg.cc/8kFkJVx0/image-5-1.png',
        date:'2024-01-05T08:41:00Z'
      },
      {
        id: 3,
        title: 'Режим использования масок и перчаток на территории магазинов',
        subTitle:
          'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
        imgUrl: 'https://i.postimg.cc/wx5h4ZKd/image-5.png',
        date:'2023-06-05T08:41:00Z'
      },
     
    ],
  };

  return (
    <main>
      <Banner />
      <div className='container main__content'>
        <div className='container__inner main__inner'>
          <Section type='product' section={sectionPromotion} />
          <Section type='product' section={sectionNovelty} />
          <Section type='product' section={sectionBuy} />
          <SpecialOffers />
          <MapSection />
          <Section type='news' section={sectionNews} />
        </div>
      </div>
    </main>
  );
};
