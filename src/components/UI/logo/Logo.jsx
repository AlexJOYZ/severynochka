import logoHorizontal from '../../../assets//icons/logo/logo-horizontal.svg';
import logoVertical from '../../../assets//icons/logo/logo-vertical.svg';
import logoZnak from '../../../../public/logo-znak.svg';

import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

export const Logo = ({ type, className='' }) => {
  return (
    <NavLink to='/' className={`${classes.logo} ${classes[type]} ${className}`}>
      <img src={logoHorizontal} className={classes.icon__horizontal} />
      <img src={logoVertical} className={classes.icon__vertical} />
      <img src={logoZnak} className={classes.icon__znak} />
    </NavLink>
  );
};
