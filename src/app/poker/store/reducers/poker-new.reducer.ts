import { PokerNewActions, PokerNewActionTypes } from '../actions';
import { ServerError } from '../../../core/model';

export interface State {
  pending: boolean;
  error: ServerError;
}

const initialState: State = {
  pending: false,
  error: null
};

export function reducer(state: State = initialState, action: PokerNewActions) {

  switch (action.type) {
    case PokerNewActionTypes.Create:
      return { ...state, pending: true, error: null };

    case PokerNewActionTypes.CreateSuccess:
      return initialState;

    case PokerNewActionTypes.CreateFailure:
      return { ...state, pending: false, error: action.payload };

    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
