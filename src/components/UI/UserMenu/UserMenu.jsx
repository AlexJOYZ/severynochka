import cl from './UserMenu.module.css'
import icon from'../../../assets/icons/userIcons/avatar.png'

import { ArrowButton } from '../buttons/ArrowButton/ArrowButton';
import { Typography } from '../Typography/Typography';

export const UserMenu = () => {
  return (
    <div className={cl.menu__container}>
      <img className={cl.user__avatar} src={icon} alt='avatar' />
      <Typography as='p' variant='text' size='s'>
        Алексей
      </Typography>
      <div className={cl.button__container}>
        <ArrowButton type='icon-btn' decoration='no' accent='primary' size='m' direction='down' />
      </div>
    </div>
  );
};
