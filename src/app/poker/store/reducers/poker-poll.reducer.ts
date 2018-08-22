import { Poll, Vote } from '../../model';
import { PokerPollActions, PokerPollActionTypes } from '../actions';

export interface State {
  currentPoll: Poll;
  yourVote: Vote;
}

const initialState: State = {
  currentPoll: null,
  yourVote: null
};

export function reducer(state: State = initialState, action: PokerPollActions) {
  switch (action.type) {

    case PokerPollActionTypes.LoadSuccess:
      return { ...state, currentPoll: action.payload };

    case PokerPollActionTypes.YourVoteChanged:
      return { ...state, yourVote: action.payload };

    default:
      return state;
  }
}

export const getCurrentPoll = (state: State) => state.currentPoll;
