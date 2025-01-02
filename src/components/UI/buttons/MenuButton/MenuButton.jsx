import cl from './MenuButton.module.css';

import { Typography } from '../../Typography/Typography';
import { useRef } from 'react';
import { useHover } from '../../../../hooks/useHover';
import { useDispatch, useSelector } from 'react-redux';

export const MenuButton = ({ type = 'default', children, Icon }) => {
  const ref = useRef();
  const isHovering = useHover(ref);

  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <div className={`${cl.button__container} ${cl[type]} ${isHovering ? cl.hover : ''}`} ref={ref}>
      <div className={cl.menuButton__img}>
        <Icon />
        <Typography as='span' size='xs' variant='text' className={cl.cart__length}>
          {cartItemsCount}
        </Typography>
      </div>
      <Typography as='p' size='xs' variant='text'>
        {children}
      </Typography>
    </div>
  );
};
