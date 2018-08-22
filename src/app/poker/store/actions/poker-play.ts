import { Action } from '@ngrx/store';
import { PokerGame } from '../../model';
import { ServerError } from '../../../core/model';

export enum PokerPlayActionTypes {
  Load = '[Poker] Load',
  LoadSuccess = '[Poker] Load Success',
  LoadFailure = '[Poker] Load Failure'
}

export class LoadPoker implements Action {
  readonly type = PokerPlayActionTypes.Load;

  constructor(public payload: { pokerId: string }) {}
}

export class LoadPokerSuccess implements Action {
  readonly type = PokerPlayActionTypes.LoadSuccess;

  constructor(public payload: PokerGame) {}
}

export class LoadPokerFailure implements Action {
  readonly type = PokerPlayActionTypes.LoadFailure;

  constructor(public payload: ServerError) {}
}

export type PokerPlayActions =
  | LoadPoker
  | LoadPokerSuccess
  | LoadPokerFailure;
