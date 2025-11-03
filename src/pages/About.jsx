import { AboutDescriptionIcon } from '../components/UI/icons/about/AboutDescriptionIcon';
import { ArcIcon } from '../components/UI/icons/about/ArcIcon';
import { EllipseIcon } from '../components/UI/icons/about/EllipseIcon';
import { RectangleIcon } from '../components/UI/icons/about/RectangleIcon';
import { SmileIcon } from '../components/UI/icons/about/SmileIcon';
import { RoutePageHistory } from '../components/UI/routePageHistory/RoutePageHistory';
import { Typography } from '../components/UI/Typography/Typography';

export const About = () => {
  return (
    <main className='container main'>
      <RoutePageHistory routes={['Главная', 'О компании']} />
      <div className='about__container'>
        <div className='about__description'>
          <Typography className='about__header' as='h2' size='xl' variant='header'>
            О компании
          </Typography>
          <Typography as='p' variant='text-bold' size='l'>
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших
            клиентах, стремимся к лучшему будущему.
          </Typography>
          <AboutDescriptionIcon />
          <EllipseIcon />
          <RectangleIcon />
          <ArcIcon />
          <SmileIcon />
        </div>
        <div className="about__advantages">
          <div className="advantages__item">
            <div className="advantages__item__description">
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
