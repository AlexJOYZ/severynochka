import logoHorizontal from '../../../assets//icons/logo/logo-horizontal.svg';
import logoVertical from '../../../assets//icons/logo/logo-vertical.svg';
import logoSign from '../../../../public/logo-sign.svg';

import classes from './Logo.module.css';

export const Logo = ({ type, className = '' }) => {
  return (
    <div className={`${classes.logo} ${classes[type]} ${className}`}>
      <img src={logoHorizontal} className={classes.icon__horizontal} />
      <img src={logoVertical} className={classes.icon__vertical} />
      <img src={logoSign} className={classes.icon__sign} />
    </div>
  );
};
