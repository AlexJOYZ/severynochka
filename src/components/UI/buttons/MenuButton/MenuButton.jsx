import cl from './MenuButton.module.css';

import { Typography } from '../../Typography/Typography';
import { useRef } from 'react';
import { useHover } from '../../../../hooks/useHover';

export const MenuButton = ({ children, Icon }) => {
  const ref = useRef();
  const isHovering = useHover(ref);
  return (
    <div className={`${cl.button__container} ${isHovering ? cl.hover : ''}`} ref={ref}>
      <Icon />
      <Typography as='p' size='xs' variant='text'>
        {children}
      </Typography>
    </div>
  );
};
