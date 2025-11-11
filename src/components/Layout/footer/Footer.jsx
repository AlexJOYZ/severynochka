import { Link, NavLink } from 'react-router-dom';

import { Logo } from '../../UI/logo/Logo';
import { Typography } from '../../UI/Typography/Typography';
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS, ROUTES } from '../../../const';
import { TelephoneLink } from '../../UI/telephoneLink/TelephoneLink';

import '../../../styles/footer/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <div className='footer__left'>
          <Link to={ROUTES.MAIN}>
            <Logo type='vertical' />
          </Link>
          {FOOTER_LINKS.map((link) => (
            <NavLink
              className={({ isActive }) => isActive && 'footer__link__current'}
              to={link.path}
            >
              <Typography className='footer__navigate__link' as='p' variant='text' size='xs'>
                {link.title}
              </Typography>
            </NavLink>
          ))}
        </div>
        <div className='footer__right'>
          <div className='footer__social'>
            {FOOTER_SOCIAL_LINKS.map((socialLink) => (
              <a target='_blank' href={socialLink.link}>
                <socialLink.icon />
              </a>
            ))}
          </div>
          <TelephoneLink tel='8 800 777 33 33' />
        </div>
      </div>
    </footer>
  );
};
