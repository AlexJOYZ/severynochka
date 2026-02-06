import { ArrowButton } from '../../UI/buttons/ArrowButton/ArrowButton';
import { Typography } from '../../UI/Typography/Typography';
import { SectionItems } from './SectionItems/SectionItems';
import { Grid } from '../Grid';
import { Flex } from '../Flex';

import '../../../styles/sectionProducts/sectionProducts.css';

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
      {type === 'product' && (
        <Grid>
          <SectionItems items={items} type={type} />
        </Grid>
      )}
      {type === 'news' && (
        <Flex>
          <SectionItems items={items} type={type} />
        </Flex>
      )}
    </section>
  );
};
