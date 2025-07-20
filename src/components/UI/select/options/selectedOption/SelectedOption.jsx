import style from './SelectedOption.module.css'

import { CloseIcon } from '../../../icons/header/CloseIcon';
import { Typography } from '../../../Typography/Typography';

export const SelectedOption = ({ option, onClose }) => {
  return (
    <li className={style.selected__option}>
      <Typography as='span' size='s' variant='text'>
        {option.value}
      </Typography>
      <CloseIcon className={style.close__icon} onClick={() => onClose(option)} />
    </li>
  );
};
