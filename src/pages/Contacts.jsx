import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { MapSection } from '../components/Layout/MapSection/MapSection';
import { ContactsHomeIcon } from '../components/UI/icons/contacts/ContactsHomeIcon';
import { ContactsPercentIcon } from '../components/UI/icons/contacts/ContactsPercentIcon';
import { Typography } from '../components/UI/Typography/Typography';

import '../styles/pages/Contacts.css';

export const Contacts = () => {
  return (
    <MainContainer routes={['Главная', 'Контакты']}>
      <Typography className='contacts__title' as='h2' variant='header' size='xl'>
        Контакты
      </Typography>
      <div className='contacts__container'>
        <section className='contacts__description'>
          <div className='contacts__description__item'>
            <ContactsHomeIcon />
            <div className='contacts__description__text'>
              <Typography as='p' variant='text' size='l'>
                Бухгалтерия, склад
              </Typography>
              <a href='tel:+78214092619' className='contacts__description__text__tel'>
                <Typography as='span' variant='text-bold' size='l'>
                  +7 821 409 26 19
                </Typography>
              </a>
            </div>
          </div>
          <div className='contacts__description__item'>
            <ContactsPercentIcon />
            <div className='contacts__description__text'>
              <Typography as='p' variant='text' size='l'>
                Вопросы по системе лояльности
              </Typography>
              <a href='tel:+79087163397' className='contacts__description__text__tel'>
                <Typography as='span' variant='text-bold' size='l'>
                  +7 908 716 33 97
                </Typography>
              </a>
            </div>
          </div>
        </section>

        <MapSection />
      </div>
    </MainContainer>
  );
};
