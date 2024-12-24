import '../../../styles/sectionProducts/sectionProducts.css';

import { ArrowButton } from '../../UI/buttons/ArrowButton/ArrowButton';
import { Typography } from '../../UI/Typography/Typography';
import { SectionItems } from './SectionItems/SectionItems';

export const Section = ({ section, type = 'product' }) => {
  const { title, titleBtn, items } = section;
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
      <SectionItems items={items} type = {type}/>
    </section>
  );
};
