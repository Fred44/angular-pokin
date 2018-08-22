import { Action } from '@ngrx/store';
import { AuthError, Credential } from '../model';
import { User } from '../../core/model';

export enum AuthActionTypes {
  Authenticated = '[Auth] Authenticated',
  NotAuthenticated = '[Auth] Not Authenticated',
  GetUser = '[Auth] Get User',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect'
}

export class Authenticated implements Action {
  readonly type = AuthActionTypes.Authenticated;

  constructor(public payload: {user: User}) {}
}

export class NotAuthenticated implements Action {
  readonly type = AuthActionTypes.NotAuthenticated;
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GetUser;
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Credential) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  // constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: AuthError) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | Authenticated
  | NotAuthenticated
  | GetUser
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout;
