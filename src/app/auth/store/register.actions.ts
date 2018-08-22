import { Action } from '@ngrx/store';
import { AuthError, Registration } from '../model';

export enum RegisterActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFailure = '[Auth] Register Failure'
}

export class Register implements Action {
  readonly type = RegisterActionTypes.Register;

  constructor(public payload: { registration: Registration }) {}
}

export class RegisterSuccess implements Action {
  readonly type = RegisterActionTypes.RegisterSuccess;
}

export class RegisterFailure implements Action {
  readonly type = RegisterActionTypes.RegisterFailure;

  constructor(public payload: AuthError) {}
}

export type RegisterActions =
  | Register
  | RegisterSuccess
  | RegisterFailure;
