import { useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

import cl from './UserMenu.module.css';

import icon from '../../../assets/icons/userIcons/avatar.png';

import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { Typography } from '../../UI/Typography/Typography';
import { Dropdown } from '../../UI/dropdown/Dropdown';
import { LogOutIcon } from '../../UI/icons/header/LogOutIcon';
import { AuthService } from '../../../API/entities/auth';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../../../store/reducers/accountReducer';
import { useQueryLazy } from '../../../hooks';
import { Spinner } from '../../UI/spinner/Spinner';

export const UserMenu = ({ user }) => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { isLoading, query, error } = useQueryLazy('logout', () => AuthService.logout());

  const closeDropdown = () => {
    setOpen(false);
  };
  const dropdownRef = useClickOutside(closeDropdown);

  return (
    <div ref={dropdownRef} className={`${cl.menu__container} ${isOpen ? `${cl.opened}` : ''}`}>
      <img className={cl.user__avatar} src={icon} alt='avatar' />
      <Dropdown value={isOpen} setValue={setOpen} label={user.name} className={cl.menu__dropdown}>
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
          onClick={() => query()}
        >
          <Typography as='span' size='s' variant='text'>
            Выйти
          </Typography>
        </IconButton>
      </Dropdown>
      {isLoading && <Spinner />}
    </div>
  );
};
