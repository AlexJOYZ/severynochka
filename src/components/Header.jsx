import { Flex } from './Layout/Flex';
import { Logo } from './UI/logo/Logo';
import '../styles/header/header.css';
import { IconButton } from './UI/buttons/IconButton/IconButton';
import { MenuIcon } from './UI/icons/MenuIcon';
import { InputSearch } from './UI/fields/InputSearch/InputSearch';

export const Header = () => {
  return (
    <header>
      <Flex>
        <Logo type='horizontal' />
        <div className='header__left'>
          <div className='button__container'>
            <IconButton accent='secondary' Icon={MenuIcon} position='left' size='m'>
              Label
            </IconButton>
          </div>
          <div className='search__inner'>
            <InputSearch maxLength="30"/>
          </div>
        </div>
      </Flex>
    </header>
  );
};
