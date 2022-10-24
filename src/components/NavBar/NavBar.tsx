import React, { useMemo } from 'react';
import { view } from '@risingstack/react-easy-state';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_CONSTANTS } from '../../router/router.constants';
import Button from '../Button/Button';
import AppStore from '../../store/store';
import { logout } from '../../store/store.functions';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const { isLoggedIn, isNavMenuOpen } = AppStore;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const loginText = useMemo(
    () => (isLoggedIn ? 'Logout' : 'Customer login'),
    [isLoggedIn]
  );

  const handleLogin = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
      return;
    }
    navigate('/login');
  };

  const goHome = () => {
    navigate('/');
  };

  const goToAbout = () => {
    navigate('/about');
  };

  const toggleNav = ({ open = true }: { open: boolean }) => {
    AppStore.isNavMenuOpen = open;
  };

  const navLinksContainer = classNames({
    row: true,
    'nav-links-container': true,
    'mobile-nav-links-container': isNavMenuOpen,
  });

  return (
    <>
      <div className={'header-container'}>
        <div className={'row navbar-container'}>
          <div className={'row title-container'} onClick={goHome}>
            <img
              className={'logo'}
              src={'/images/logo/logo.png'}
              alt={'cashew logo'}
            />
          </div>
          <div
            className={'menu'}
            onMouseOver={() => toggleNav({ open: true })}
            onMouseOut={() => toggleNav({ open: false })}
          >
            <img src={'/images/menu.png'} alt={'cashew logo'} />
          </div>
          <div className={navLinksContainer}>
            <div className={'row'}>
              <Button text={'Ways To pay'} noPadding onClick={goToAbout} />
              <Button text={'Shop'} noPadding />
              <Button text={'For Business'} noPadding />
            </div>
            <div className={'row auth-buttons'}>
              <Button text={'Merchant login'} />
              <Button primary text={loginText} onClick={handleLogin} />
            </div>
          </div>
        </div>
        {!!ROUTER_CONSTANTS[pathname]?.title && (
          <div className={'header-title-gradient'}>
            <h1 className={'header-title'}>
              {ROUTER_CONSTANTS[pathname].title}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default view(Navbar);
