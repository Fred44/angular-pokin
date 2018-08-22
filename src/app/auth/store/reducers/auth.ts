import { User } from '../../../core/model';
import { AuthActions, AuthActionTypes } from '../auth.actions';

export interface State {
  initialized: boolean;
  loggedIn: boolean;
  user: User;
}

export const initialState: State = {
  initialized: false,
  loggedIn: false,
  user: null
};

export function reducer(state: State = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.Authenticated:
      return {
        ...state,
        initialized: true,
        loggedIn: true,
        user: action.payload.user,
      };

    case AuthActionTypes.NotAuthenticated:
      return {
        ...initialState,
        initialized: true
      };

    default:
      return state;
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getAuthorizationHeader = (user: User) => (user) ? 'Bearer ' + user.idToken : null;

