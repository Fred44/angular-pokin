import { RegisterActions, RegisterActionTypes } from '../register.actions';
import { AuthError } from '../../model';

export interface State {
  error: AuthError | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export function reducer(state = initialState, action: RegisterActions): State {
  switch (action.type) {
    case RegisterActionTypes.Register: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }

    case RegisterActionTypes.RegisterSuccess: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }

    case RegisterActionTypes.RegisterFailure: {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
