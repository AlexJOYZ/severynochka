import { useRef } from 'react';
import { useHover } from '../../../../../hooks/useHover';
import { Typography } from '../../../Typography/Typography';
import style from './Option.module.css';

export const Option = ({ onClick, option }) => {
  const optionRef = useRef();
  const isHovering = useHover(optionRef);

  return (
    <li
      ref={optionRef}
      onClick={() => onClick(option)}
      className={`${style.option} ${isHovering ? style.option__hover : ''}`}
    >
      <Typography as='span' size='s' variant='text'>
        {option.value}
      </Typography>
    </li>
  );
};
