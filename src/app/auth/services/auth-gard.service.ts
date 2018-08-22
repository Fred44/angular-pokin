import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../store/reducers';
import { filter, map, take } from 'rxjs/operators';
import { LoginRedirect } from '../store/auth.actions';
import { State } from '../store/reducers/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.selectAuthStatusState),
      filter((state: State) => state.initialized),
      take(1),
      map((state: State) => {
        if (!state.loggedIn) {
          this.store.dispatch(new LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
