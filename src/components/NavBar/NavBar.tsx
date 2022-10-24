import React, { useMemo } from 'react';
import { view } from '@risingstack/react-easy-state';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_CONSTANTS } from '../../router/router.constants';
import Button from '../Button/Button';
import AppStore from '../../store/store';
import { logout } from '../../store/store.functions';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Flip from 'react-reveal/Flip';

const Navbar: React.FC = () => {
  const { isLoggedIn, isNavMenuOpen } = AppStore;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const loginText = useMemo(
    () => (isLoggedIn ? 'Logout' : 'Customer login'),
    [isLoggedIn]
  );

  const closeNav = () => {
    AppStore.isNavMenuOpen = false;
  };

  const handleLogin = () => {
    closeNav();
    if (isLoggedIn) {
      logout();
      navigate('/');
      return;
    }
    navigate('/login');
  };

  const goHome = () => {
    closeNav();
    navigate('/');
  };

  const goToAbout = () => {
    closeNav();
    navigate('/about');
  };

  const goToDashboard = () => {
    closeNav();
    navigate('/dashboard');
  };

  const toggleNav = () => {
    AppStore.isNavMenuOpen = !isNavMenuOpen;
  };

  const navLinksContainer = classNames({
    row: true,
    'nav-links-container': true,
    'mobile-nav-links-container': isNavMenuOpen,
  });

  return (
    <Flip>
      <div className={'header-container'}>
        <Zoom top duration={2000} cascade>
          <div className={'row navbar-container'}>
            <div className={'row title-container'} onClick={goHome}>
              <img
                className={'logo'}
                src={'/images/logo/logo.png'}
                alt={'cashew logo'}
              />
            </div>
            <div className={'menu'} onClick={toggleNav}>
              <img src={'/images/menu.png'} alt={'cashew logo'} />
            </div>
            <div className={navLinksContainer}>
              <div className={'row'}>
                <Button text={'Ways To pay'} noPadding onClick={goToAbout} />
                <Button text={'Shop'} noPadding />
                <Button
                  text={'For Business'}
                  noPadding
                  onClick={goToDashboard}
                />
              </div>
              <div className={'row auth-buttons'}>
                <Button text={'Merchant login'} />
                <Button primary text={loginText} onClick={handleLogin} />
              </div>
            </div>
          </div>
        </Zoom>
        <Bounce delay={2000} left>
          {!!ROUTER_CONSTANTS[pathname]?.title && (
            <div className={'header-title-gradient'}>
              <h1 className={'header-title'}>
                {ROUTER_CONSTANTS[pathname].title}
              </h1>
            </div>
          )}

        </Bounce>
      </div>
    </Flip>
  );
};

export default view(Navbar);
