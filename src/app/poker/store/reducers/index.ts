import * as fromPokerNew from './poker-new.reducer';
import * as fromPokerPlay from './poker-play.reducer';
import * as fromPokerPoll from './poker-poll.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  newPoker: fromPokerNew.State;
  pokerPlay: fromPokerPlay.State;
  pokerPoll: fromPokerPoll.State;
}

export const reducers: ActionReducerMap<State> = {
  newPoker: fromPokerNew.reducer,
  pokerPlay: fromPokerPlay.reducer,
  pokerPoll: fromPokerPoll.reducer
};

export const selectPokerState = createFeatureSelector<State>('poker');

export const selectNewPokerState = createSelector(
  selectPokerState,
  (state: State) => state.newPoker
);

export const selectPokerPollState = createSelector(
  selectPokerState,
  (state: State) => state.pokerPoll
);

export const selectNewPokerError = createSelector(
  selectNewPokerState,
  fromPokerNew.getError
);

export const selectNewPokerPending = createSelector(
  selectNewPokerState,
  fromPokerNew.getPending
);

export const selectPokerPlayState = createSelector(
  selectPokerState,
  (state: State) => state.pokerPlay
);

export const selectPokerPlayPoker = createSelector(
  selectPokerPlayState,
  fromPokerPlay.getPoker
);

export const selectCurrentPoll = createSelector(
  selectPokerPollState,
  fromPokerPoll.getCurrentPoll
);
