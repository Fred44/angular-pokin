import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Registration } from '../model';
import { Register, RegisterActionTypes, RegisterFailure, RegisterSuccess } from './register.actions';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffects {

  @Effect()
  register$ = this.actions$.pipe(
    ofType(RegisterActionTypes.Register),
    map((action: Register) => action.payload.registration),
    exhaustMap((registration: Registration) =>
      this.authService
        .createUserWithEmailAndPassword(registration)
        .pipe(
          map(authData => new RegisterSuccess()),
          catchError(error => of(new RegisterFailure(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
