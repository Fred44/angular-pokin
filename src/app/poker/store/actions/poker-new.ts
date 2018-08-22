import { Action } from '@ngrx/store';
import { PokerOptions } from '../../model';
import { ServerError } from '../../../core/model';

export enum PokerNewActionTypes {
  Create = '[Poker] Create',
  CreateSuccess = '[Poker] Create Success',
  CreateFailure = '[Poker] Create Failure'
}

export class CreatePoker implements Action {
  readonly type = PokerNewActionTypes.Create;

  constructor(public payload: PokerOptions) {}
}

export class CreatePokerSuccess implements Action {
  readonly type = PokerNewActionTypes.CreateSuccess;

  constructor(public payload: string) {}
}

export class CreatePokerFailure implements Action {
  readonly type = PokerNewActionTypes.CreateFailure;

  constructor(public payload: ServerError) {}
}

export type PokerNewActions =
  | CreatePoker
  | CreatePokerSuccess
  | CreatePokerFailure;
