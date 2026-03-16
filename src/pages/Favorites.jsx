import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { RangeSlider } from '../components/UI/sliders/RangeSlider/RangeSlider';
import { Typography } from '../components/UI/Typography/Typography';

import '../styles/pages/Favorites.css';

export const Favorites = () => {
  return (
    <MainContainer routes={['Главная', 'Избраное']}>
      <Typography as='h1' variant='header' size='xl' className='favorites__header'>
        Избраное
      </Typography>
      <div className='favorites__content'>
        <div className='favorites__filter__panel'>
          <Typography
            as='p'
            className='favorites__filter__panel__header'
            variant='text-bold'
            size='s'
          >
            Фильтр
          </Typography>
          <RangeSlider step={10} min={0} max={100} />
        </div>
        <div className='favorites__products__panel'></div>
      </div>
    </MainContainer>
  );
};
