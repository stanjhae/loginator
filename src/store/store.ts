import { store } from '@risingstack/react-easy-state';
import { AuthStateType } from './store.types';

const AuthState: AuthStateType = store({
  token: '',
});

export default AuthState;
