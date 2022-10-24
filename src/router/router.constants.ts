import { Router } from './router.types';

const ROUTER_CONSTANTS: Router = {
  '/': {
    route: '/',
    title: 'Welcome To Cashew',
  },
  '/about': {
    route: '/about',
    title: 'About us',
  },
  '/dashboard': {
    route: '/dashboard',
    title: 'Dashboard',
  },
  '/login': {
    route: '/login',
    title: 'Customer Login',
  },
};

export { ROUTER_CONSTANTS };
