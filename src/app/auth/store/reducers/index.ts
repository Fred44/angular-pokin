import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth';
import * as fromLoginPage from './login-page';
import * as fromRegisterPage from './register-page';

export interface State {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
  registerPage: fromRegisterPage.State;
}

export const reducers: ActionReducerMap<State> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
  registerPage: fromRegisterPage.reducer
};

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: State) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);

export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);

export const selectAuthorizationHeader = createSelector(
  selectUser,
  fromAuth.getAuthorizationHeader
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: State) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);

export const selectRegisterPageState = createSelector(
  selectAuthState,
  (state: State) => state.registerPage
);
export const getRegisterPageError = createSelector(
  selectRegisterPageState,
  fromLoginPage.getError
);
export const getRegisterPagePending = createSelector(
  selectRegisterPageState,
  fromLoginPage.getPending
);
