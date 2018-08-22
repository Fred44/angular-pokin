import { PokerPlayActions, PokerPlayActionTypes } from '../actions';
import { PokerGame } from '../../model';
import { ServerError } from '../../../core/model';

export interface State {
  loading: boolean;
  error: ServerError;
  poker: PokerGame;
}

const initialState: State = {
  loading: false,
  error: null,
  poker: null
};

export function reducer(state: State = initialState, action: PokerPlayActions) {

  switch (action.type) {

    case PokerPlayActionTypes.Load:
      return { ...state, loading: true, error: null };

    case PokerPlayActionTypes.LoadSuccess:
      return {
        ...state,
        poker: action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
}

export const getPoker = (state: State) => state.poker;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
