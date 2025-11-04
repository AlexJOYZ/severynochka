
import { AboutDescriptionIcon } from '../components/UI/icons/about/AboutDescriptionIcon';
import { ArcIcon } from '../components/UI/icons/about/ArcIcon';
import { CheckIcon } from '../components/UI/icons/about/CheckIcon';
import { EllipseIcon } from '../components/UI/icons/about/EllipseIcon';
import { RectangleIcon } from '../components/UI/icons/about/RectangleIcon';
import { SmileIcon } from '../components/UI/icons/about/SmileIcon';
import { RoutePageHistory } from '../components/UI/routePageHistory/RoutePageHistory';
import { Typography } from '../components/UI/Typography/Typography';

import '../styles/pages/About.css';

export const About = () => {
  return (
    <main className='container main'>
      <RoutePageHistory routes={['Главная', 'О компании']} />
      <div className='about__container'>
        <div className='about__description'>
          <div className='about__description__text'>
            <Typography className='about__title' as='h2' size='xl' variant='header'>
              О компании
            </Typography>
            <Typography className='about__subtitle' as='p' variant='text-bold' size='l'>
              Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших
              клиентах, стремимся к лучшему будущему.
            </Typography>
          </div>
          <div className='about__description__icon'>
            <AboutDescriptionIcon />
          </div>
          <EllipseIcon />
          <RectangleIcon />
          <ArcIcon />
          <SmileIcon />
        </div>
        <div className='about__advantages'>
          <div className='advantages__item'>
            <CheckIcon />
            <div className='advantages__item__description'>
              <Typography as='p' variant='text' size='m'>
                Мы занимаемся розничной торговлей
              </Typography>
              <Typography as='b' variant='text-bold' size='l'>
                Мы занимаемся розничной торговлей
              </Typography>
            </div>
          </div>
          <div className='advantages__item'>
            <CheckIcon />
            <div className='advantages__item__description'>
              <Typography as='p' variant='text' size='m'>
                Основная миссия компании
              </Typography>
              <Typography as='b' variant='text-bold' size='l'>
                Максимальное качество товаров и услуг по доступной цене.
              </Typography>
            </div>
          </div>
          <div className='advantages__item'>
            <CheckIcon />
            <div className='advantages__item__description'>
              <Typography as='p' variant='text' size='m'>
                Отличительная черта нашей сети
              </Typography>
              <Typography as='b' variant='text-bold' size='l'>
                Здоровая и полезная продукция местного производства внаших магазинах.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
