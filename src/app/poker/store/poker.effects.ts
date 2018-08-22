import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PokerService } from '../poker.service';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { PokerGame, PokerOptions, Poll } from '../model';
import {
  CreatePoker,
  CreatePokerFailure,
  CreatePokerSuccess, LoadLastPollSuccess, LoadPoker, LoadPokerSuccess,
  PokerNewActionTypes,
  PokerPlayActionTypes
} from './actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ServerError } from '../../core/model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PokerEffects {

  @Effect()
  startNewPoker$ = this.actions$.pipe(
    ofType(PokerNewActionTypes.Create),
    map((action: CreatePoker) => action.payload),
    switchMap((options: PokerOptions) =>
      this.svc.createNewPoker(options).pipe(
        tap((pokerId: string) => this.router.navigate(['/poker/new', pokerId])),
        map((pokerId: string) => new CreatePokerSuccess(pokerId)),
        catchError((error: ServerError) => of(new CreatePokerFailure(error)))
      )
    )
  );

  @Effect()
  loadPoker$ = this.actions$.pipe(
    ofType(PokerPlayActionTypes.Load),
    map((action: LoadPoker) => action.payload.pokerId),
    switchMap((pokerId: string) =>
      this.svc.getPoker(pokerId).pipe(
        map((poker: PokerGame) => new LoadPokerSuccess(poker))
      )
    )
  );

  @Effect()
  loadPoll$ = this.actions$.pipe(
    ofType(PokerPlayActionTypes.LoadSuccess),
    map((action: LoadPokerSuccess) => action.payload),
    switchMap((poker: PokerGame) =>
      this.svc.getLastPokerPoll(poker.id).pipe(
        map((poll: Poll) => new LoadLastPollSuccess(poll))
      )
    )
  );

  // yourVote$ = this.actions$.pipe(
  //   ofType(LoadLastPollSuccess(poll))
  // );

  constructor(
    private actions$: Actions,
    private router: Router,
    private svc: PokerService,
    private authSvc: AuthService
  ) { }
}

export const effects = [
  PokerEffects
];
