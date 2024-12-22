import '../../../styles/sectionProducts/sectionProducts.css';

import { ArrowButton } from '../../UI/buttons/ArrowButton/ArrowButton';
import { ItemCard } from '../../UI/cards/ItemCard/ItemCard';
import { Typography } from '../../UI/Typography/Typography';

export const SectionProducts = ({ productSection }) => {
  const { title, titleBtn, products } = productSection;
  return (
    <section className='section'>
      <div className='section__header'>
        <Typography as='h2' variant='header' size='m'>
          {title}
        </Typography>
        <div className='section__btn'>
          <ArrowButton accent='grayscale' size='m' decoration='no'>
            Все {titleBtn}
          </ArrowButton>
        </div>
      </div>
      <div className='section__content'>
        {products.map((product) => (
          <ItemCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};
