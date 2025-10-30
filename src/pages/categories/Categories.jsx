import '../../styles/pages/Categories.css';

import { CATEGORIES } from '../../const/categories';

import { CategoryCard } from '../../components/UI/cards/categoryCard/CategoryCard';
import { Link } from 'react-router-dom';
import { Typography } from '../../components/UI/Typography/Typography';
import { ArrowIcon } from '../../components/UI/icons/inputIcons/ArrowIcon';

export const Categories = () => {
  return (
    <main className='container main'>
      <Typography className='page__history' as='p' size='xs' variant='text'>
        <Link to='/'>Главная</Link>
        <ArrowIcon className='page__history__arrow' />
        <span className='page__history__current'>Каталог</span>
      </Typography>
      <Typography className='categories__header' as='h2' size='xl' variant='header'>
        Каталог
      </Typography>
      <div className='categories__grid'>
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};
