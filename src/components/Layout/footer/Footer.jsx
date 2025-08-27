import '../../../styles/footer/footer.css';

import { Link } from 'react-router-dom';

import { TelephoneIcon } from '../../UI/icons/footer/TelephoneIcon';
import { FacebookIcon } from '../../UI/icons/social/FacebookIcon';
import { InstagramIcon } from '../../UI/icons/social/InstagramIcon';
import { OkIcon } from '../../UI/icons/social/OkIcon';
import { VkIcon } from '../../UI/icons/social/VkIcon';

import { Logo } from '../../UI/logo/Logo';
import { Typography } from '../../UI/Typography/Typography';

export const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <div className='footer__left'>
          <Logo type='vertical' />
          <Link to='/about'>
            <Typography as='p' variant='text' size='xs'>
              О компании
            </Typography>
          </Link>
          <Link to='/contacts'>
            <Typography as='p' variant='text' size='xs'>
              Контакты
            </Typography>
          </Link>
          <Link to='/vacancy'>
            <Typography as='p' variant='text' size='xs'>
              Вакансии
            </Typography>
          </Link>
          <Link to='/cart'>
          <Typography as='p' variant='text' size='xs'>
            Статьи
          </Typography>
          </Link>
          <Typography as='p' variant='text' size='xs'>
            Политика обработки персональных данных
          </Typography>
        </div>
        <div className='footer__right'>
          <div className='footer__social'>
            <InstagramIcon />
            <VkIcon />
            <FacebookIcon />
            <OkIcon />
          </div>
          <div className='footer__tel'>
            <TelephoneIcon />
            <Typography as='span' variant='text' size='s'>
              8 800 777 33 33
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
