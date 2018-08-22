import { Action } from '@ngrx/store';
import { Poll, Vote } from '../../model';

export enum PokerPollActionTypes {
  Load = '[Poll] Load',
  LoadSuccess = '[Poll] Load Success',
  LoadFailure = '[Poll] Load Failure',
  YourVoteChanged = '[Poll] Your Vote Changed'
}

export class LoadLastPoll implements Action {
  readonly type = PokerPollActionTypes.Load;

  constructor(public payload: { pokerId: string }) {}
}

export class LoadLastPollSuccess implements Action {
  readonly type = PokerPollActionTypes.LoadSuccess;

  constructor(public payload: Poll) {}
}

export class YourVoteChanged implements Action {
  readonly type = PokerPollActionTypes.YourVoteChanged;

  constructor(public payload: Vote) {}
}

export type PokerPollActions =
  | LoadLastPoll
  | LoadLastPollSuccess
  | YourVoteChanged;
