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
  return (
    <main>
      <Banner />
      <div className='container main__content'>
        <div className='container__inner main__inner'>
          <Section section={sectionPromotion} />
          <Section section={sectionNovelty} />
          <Section section={sectionBuy} />
          <SpecialOffers />
          <MapSection />
        </div>
      </div>
    </main>
  );
};
