import '../../../styles/header/header.css';

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
  return (
    <div className='header__container'>
      <header>
        <div className='header__left'>
          <Logo type='horizontal' className='header__logo' />
          <div className='button__container'>
            <IconButton accent='secondary' Icon={MenuIcon} position='left' size='m'>
              Каталог
            </IconButton>
          </div>
          <div className='search__inner'>
            <InputSearch maxLength='30' />
          </div>
        </div>
        <div className='header__right'>
          <MenuButton Icon={FavoritesIcon}>Избранное</MenuButton>
          <MenuButton Icon={OrderIcon}>Заказы</MenuButton>
          <MenuButton Icon={CartIcon}>Корзина</MenuButton>
          <UserMenu />
        </div>
      </header>
    </div>
  );
};
