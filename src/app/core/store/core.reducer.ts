import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {
}

export const reducer: ActionReducerMap<State> = {
};

export const selectCoreState = createFeatureSelector<State>('core');
