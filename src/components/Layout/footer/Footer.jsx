import '../../../styles/footer/footer.css';

import { Link } from 'react-router-dom';

import { TelephoneIcon } from '../../UI/icons/footer/TelephoneIcon';
import { FacebookIcon } from '../../UI/icons/social/FacebookIcon';
import { InstagramIcon } from '../../UI/icons/social/InstagramIcon';
import { OkIcon } from '../../UI/icons/social/OkIcon';
import { VkIcon } from '../../UI/icons/social/VkIcon';

import { Logo } from '../../UI/logo/Logo';
import { Typography } from '../../UI/Typography/Typography';
import { FOOTER__LINKS } from '../../../const/footer';

export const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <div className='footer__left'>
          <Logo type='vertical' />
          {FOOTER__LINKS.map((link) => (
            <Link to={link.path}>
              <Typography as='p' variant='text' size='xs'>
                {link.title}
              </Typography>
            </Link>
          ))}
        </div>
        <div className='footer__right'>
          <div className='footer__social'>
            <a target='_blank' href='https://www.instagram.com/'>
              <InstagramIcon />
            </a>
            <a target='_blank' href='https://vk.com/'>
              <VkIcon />
            </a>
            <a target='_blank' href='https://www.facebook.com/?locale=ru_RU'>
              <FacebookIcon />
            </a>
            <a target='_blank' href='https://www.facebook.com/?locale=ru_RU'>
              <OkIcon />
            </a>
          </div>
          <a href='tel:+78007773333' className='footer__tel'>
            <TelephoneIcon />
            <Typography as='span' variant='text' size='s'>
              8 800 777 33 33
            </Typography>
          </a>
        </div>
      </div>
    </footer>
  );
};
