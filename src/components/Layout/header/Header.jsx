import { useRef } from 'react';

import '../../../styles/header/header.css';

import { Link } from 'react-router-dom';
import { Logo } from '../../UI/logo/Logo';
import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { MenuIcon } from '../../UI/icons/inputIcons/MenuIcon';
import { InputSearch } from '../../UI/fields/InputSearch/InputSearch';
import { MenuButton } from '../../UI/buttons/MenuButton/MenuButton';
import { FavoritesIcon } from '../../UI/icons/MenuButtons/FavoritesIcon';
import { OrderIcon } from '../../UI/icons/MenuButtons/OrderIcon';
import { CartIcon } from '../../UI/icons/MenuButtons/CartIcon';
import { UserMenu } from '../../UI/UserMenu/UserMenu';

export const Header = () => {

  const categoryRef = useRef()
  const isCategoryHovering = useRef(categoryRef)

  return (
    <div className='header__container'>
      <header>
        <div className='header__left'>
          <Link to='/' ref={categoryRef}>
            <Logo type='horizontal' className='header__logo' />
          </Link>
          <div className='button__container'>
            <Link to='/category'>
              <IconButton accent='secondary' Icon={MenuIcon} position='left' size='m'>
                Каталог
              </IconButton>
            </Link>
          </div>
          <div className='search__inner'>
            <InputSearch maxLength='30' />
          </div>
        </div>
        <div className='header__right'>
          <Link to='/favorites'>
            <MenuButton Icon={FavoritesIcon}>Избранное</MenuButton>
          </Link>
          <Link to='/orders'>
            <MenuButton Icon={OrderIcon}>Заказы</MenuButton>
          </Link>
          <Link to='/cart'>
            <MenuButton Icon={CartIcon}>Корзина</MenuButton>
          </Link>
          <UserMenu />
        </div>
      </header>
    </div>
  );
};
