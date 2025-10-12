import { useRef, useState } from 'react';

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
import { Menu } from '../../UI/menu/Menu';
import { useHover } from '../../../hooks/useHover';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../UI/buttons/Button/Button';
// import { useFetching } from '../../../hooks/useFetch';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthForm } from '../authFrom/AuthForm';

export const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const categoryRef = useRef();
  const menuRef = useRef();

  const dispatch = useDispatch();

  const authData = useSelector((store) => store.account);
  console.log(authData)

  const isCategoryHovering = useHover(categoryRef);
  const isMenuHovering = useHover(menuRef);

  // const { fetching, isLoading, error } = useFetching(async () => {
  //   dispatch(checkAuth());
  // });

  const isMenu = isCategoryHovering || isMenuHovering;


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
                <Menu />
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
          {authData.isAuth ? (
            <UserMenu user={authData.user} />
          ) : (
            <div className='button__container'>
              <Button
                onClick={() => setIsModal(true)}
                accent='primary'
                size='m'
                decoration='default'
              >
                Войти
              </Button>
            </div>
          )}
        </div>
      </header>
      {isModal && <AuthForm setIsModal={setIsModal} />}
    </div>
  );
};
