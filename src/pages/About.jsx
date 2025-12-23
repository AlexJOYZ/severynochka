import { MainContainer } from '../components/Layout/MainContainer/MainContainer';
import { AboutDescriptionIcon } from '../components/UI/icons/about/AboutDescriptionIcon';
import { ArcIcon } from '../components/UI/icons/about/ArcIcon';
import { CheckIcon } from '../components/UI/icons/about/CheckIcon';
import { EllipseIcon } from '../components/UI/icons/about/EllipseIcon';
import { RectangleIcon } from '../components/UI/icons/about/RectangleIcon';
import { SmileIcon } from '../components/UI/icons/about/SmileIcon';
import { Logo } from '../components/UI/logo/Logo';

import { Typography } from '../components/UI/Typography/Typography';

import '../styles/pages/About.css';

export const About = () => {
  return (
    <MainContainer routes={['Главная', 'О компании']}>
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
          <EllipseIcon className='about__description__ellipse__1' />
          <EllipseIcon className='about__description__ellipse__2' />
          <RectangleIcon className='about__description__rectangle__1' />
          <RectangleIcon className='about__description__rectangle__2' />
          <ArcIcon className='about__description__arc__1' />
          <ArcIcon className='about__description__arc__2' />
          <SmileIcon className='about__description__smile__1' />
          <SmileIcon className='about__description__smile__2' />
        </div>
        <div className='about__advantages'>
          <div className='advantages__item'>
            <CheckIcon />
            <div className='advantages__item__description'>
              <Typography as='p' variant='text' size='m'>
                Мы занимаемся розничной торговлей
              </Typography>
              <Typography as='b' variant='text-bold' size='l'>
                Более 20 лет.
              </Typography>
            </div>
          </div>
          <div className='advantages__item'>
            <CheckIcon />
            <div className='advantages__item__description'>
              <Typography as='p' variant='text' size='m'>
                Основная миссия компании
              </Typography>
              <Typography as='p' variant='text-bold' size='l'>
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
        <div className='about__slogan'>
          <Logo className='about__slogan__icon' type='sign' />
          <div className='about__slogan__container'>
            <div className='about__slogan__triangle'></div>
            <Typography className='about__slogan__text' as='h4' variant='text-bold' size='l'>
              Спасибо за то, что вы с нами. Северяночка, везет всегда!
            </Typography>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
