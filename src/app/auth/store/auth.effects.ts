import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  AuthActionTypes, Authenticated,
  GetUser,
  Login,
  LoginFailure, LoginSuccess,
  NotAuthenticated
} from './auth.actions';
import { Credential } from '../model';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  getUser = this.actions$.pipe(
    ofType(AuthActionTypes.GetUser),
    switchMap(payload => this.authService.getUser() ),
    map(user => {
      if (user) {
        return new Authenticated({user: user});
      } else {
        return new NotAuthenticated();
      }
    })
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    switchMap((auth: Credential) => this.authService.signInWithEmailAndPassword(auth)),
    switchMap(authState => [
      new GetUser(),
      new LoginSuccess()
    ]),
    // map(authState => new GetUser()),
    catchError(error => of(new LoginFailure(error)))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    switchMap(action => this.authService.logout()),
    map(authData => new NotAuthenticated())
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/poker/new']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/user/login']);
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
