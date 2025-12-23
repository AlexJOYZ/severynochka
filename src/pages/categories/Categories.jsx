import { CATEGORIES } from '../../const/categories';

import { CategoryCard } from '../../components/UI/cards/categoryCard/CategoryCard';
import { Typography } from '../../components/UI/Typography/Typography';
import { MainContainer } from '../../components/Layout/MainContainer/MainContainer';

import '../../styles/pages/Categories.css';

export const Categories = () => {
  return (
    <MainContainer routes={['Главная', 'Каталог']}>
      <Typography className='categories__header' as='h2' size='xl' variant='header'>
        Каталог
      </Typography>
      <div className='categories__grid'>
        {CATEGORIES.map((category) => (
          <CategoryCard
            className={
              (category.id === 1 || category.id === 10 || category.id === 12) &&
              'category__card__double'
            }
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </MainContainer>
  );
};
