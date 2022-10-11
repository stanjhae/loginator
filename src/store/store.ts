import { store } from '@risingstack/react-easy-state';
import { AuthStateType } from './store.types';

const AuthState: AuthStateType = store({
  token: '',
  isLoggedIn: false,
});

export default AuthState;
