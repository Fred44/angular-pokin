import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import * as actions from '../../store/actions';
import * as fromPoker from '../../store/reducers';
import * as fromAuth from '../../../auth/store/reducers';
import * as fromAuthStatus from '../../../auth/store/reducers/auth';
import { PokerGame, Poll } from '../../model';
import { PokerService } from '../../poker.service';
import { State } from '../../../reducers';
import { User } from '../../../core/model';

@Component({
  templateUrl: './poker-play.container.html',
  styleUrls: ['./poker-play.container.scss']
})
export class PokerPlayContainer implements OnInit, OnDestroy {

  subs: Subscription[] = [];

  loading: boolean;
  isLoggedIn: boolean;
  user: User;

  poker$: Observable<PokerGame>;
  currentPoll$: Observable<Poll>;

  constructor(private store: Store<State>, private route: ActivatedRoute, private pokerSvc: PokerService) {
    this.subs.push(
      route.params.pipe(
        map(params => new actions.LoadPoker({ pokerId: params.pokerId })),
      ).subscribe(store),

      this.store.pipe(
        select(fromPoker.selectPokerPlayState),
        select((state: any) => state.loading)
      ).subscribe((loading: boolean) => this.loading = loading),

      this.store.pipe(
        select(fromAuth.selectAuthStatusState),
        filter((authState: fromAuthStatus.State) => authState.initialized)
      ).subscribe((authState: fromAuthStatus.State) => {
        this.isLoggedIn = authState.loggedIn;
        this.user = authState.user;
      })
    );

    this.poker$ = this.store.pipe(select(fromPoker.selectPokerPlayPoker));
    this.currentPoll$ = this.store.pipe(select(fromPoker.selectCurrentPoll));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      if (sub && sub instanceof Subscription)
        sub.unsubscribe();
    });
  }

}
