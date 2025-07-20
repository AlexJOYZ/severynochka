import { useState } from 'react';
import { Button } from '../../buttons/Button/Button';
import { EyeIcon } from '../../icons/inputIcons/EyeIcon';
import { EyeOffIcon } from '../../icons/inputIcons/EyeOffIcon';
import { Input } from '../Input/Input';

import cl from '../Input/Input.module.css';
import style from './InputPassword.module.css';
import { Typography } from '../../Typography/Typography';

export const InputPassword = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.input__root}>
      {!!label && (
        <Typography
          className={cl.input__label}
          as='label'
          size={`${props.size === 'm' ? 's' : 'm'}`}
          variant='text'
        >
          {label}
        </Typography>
      )}
      <div className={style.input__wrapper}>
        <Input type={showPassword ? 'text' : 'password'} {...props} />
        <div className={style.button__container}>
          <Button
            type='button'
            size='m'
            className={style.input__btn}
            accent='primary'
            decoration='no'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};
