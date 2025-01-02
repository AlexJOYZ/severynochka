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
import { Menu } from '../../UI/menu/Menu';
import { useHover } from '../../../hooks/useHover';

export const Header = () => {
  const categoryRef = useRef();
  const menuRef = useRef();

  const isCategoryHovering = useHover(categoryRef);
  const isMenuHovering = useHover(menuRef);

  const isMenu = isCategoryHovering || isMenuHovering;

  console.log(isMenu);

  return (
    <div className='header__container'>
      <header>
        <div className='header__left'>
          <Link to='/' ref={categoryRef}>
            <Logo type='horizontal' className='header__logo' />
          </Link>
          <div
            className={`${isCategoryHovering ? 'menu__open' : ''} button__container`}
            ref={categoryRef}
          >
            <Link to='/categories'>
              <IconButton accent='secondary' Icon={MenuIcon} position='left' size='m'>
                Каталог
              </IconButton>
            </Link>
            {isMenu && (
              <div className='menu__container' ref={menuRef}>
                <Menu props={''} />
              </div>
            )}
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
            <MenuButton type='cart' Icon={CartIcon}>
              Корзина
            </MenuButton>
          </Link>
          <UserMenu />
        </div>
      </header>
    </div>
  );
};
