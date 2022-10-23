import React, { useMemo } from 'react';
import { view } from '@risingstack/react-easy-state';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_CONSTANTS } from '../../router/router.constants';
import Button from '../Button/Button';
import AuthState from '../../store/store';
import { logout } from '../../store/store.functions';

const Navbar: React.FC = () => {
  const { isLoggedIn } = AuthState;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const loginText = useMemo(
    () => (isLoggedIn ? 'Logout' : 'Customer Login'),
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
          <div className={'row middle-links'}>
            <Button text={'Ways To pay'} noPadding onClick={goToAbout} />
            <Button text={'Shop'} noPadding />
            <Button text={'For Business'} noPadding />
          </div>
          <div className={'row login-buttons'}>
            <Button text={'Merchant login'} />
            <Button primary text={loginText} onClick={handleLogin} />
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
