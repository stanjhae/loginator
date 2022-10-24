import { store } from '@risingstack/react-easy-state';
import { AppStoreType } from './store.types';

const AppStore: AppStoreType = store({
  token: '',
  isLoggedIn: false,
  isNavMenuOpen: false,
});

export default AppStore;
