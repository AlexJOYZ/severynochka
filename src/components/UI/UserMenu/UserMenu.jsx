import cl from './UserMenu.module.css';
import icon from '../../../assets/icons/userIcons/avatar.png';

import { Dropdown } from '../dropdown/Dropdown';
import { IconButton } from '../buttons/IconButton/IconButton';
import { LogOutIcon } from '../icons/header/LogOutIcon';
import { useState } from 'react';
import { Typography } from '../Typography/Typography';

export const UserMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const openDropdown = (event) => {
    setOpen(!isOpen);
  };
  return (
    <div className={`${cl.menu__container} ${isOpen?`${cl.opened}`:''}`}>
      <img className={cl.user__avatar} src={icon} alt='avatar' />
      <Dropdown value={isOpen} onClick={openDropdown} label='Алексей' className={cl.menu__dropdown}>
        <Dropdown label='Профиль'>
          <li className=''>dfdsd</li>
          <li className=''>dfdfs</li>
          <li className=''>dsfdsfd</li>
        </Dropdown>
        <IconButton
          accent='grayscale'
          className={cl.btn__logout}
          Icon={LogOutIcon}
          position='right'
          decoration='no'
        >
          <Typography as='span' size='s' variant='text'>
            Выйти
          </Typography>
        </IconButton>
      </Dropdown>
    </div>
  );
};
