import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CardSet, CardSets, PokerOptions } from '../../model';
import * as actions from '../../store/actions/poker-new';
import * as fromPoker from '../../store/reducers';
import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../auth/store/reducers'
import { Observable, Subscription } from 'rxjs';
import { ServerError, User } from '../../../core/model';

@Component({
  templateUrl: './poker-new.container.html',
  styleUrls: ['./poker-new.container.scss']
})
export class PokerNewContainer implements OnInit, OnDestroy {

  user: User;

  pending: boolean;
  error$: Observable<ServerError>;

  sub: Subscription[] = [];

  pokerOptions: PokerOptions;

  cardSets: { code: string, label: string }[];


  constructor(private store: Store<fromRoot.State>) {
    this.error$ = this.store.pipe(select(fromPoker.selectNewPokerError));

    this.sub.push(
      store.pipe(select(fromAuth.selectUser))
        .subscribe((user: User) => this.user = user),

      store.pipe(select(fromPoker.selectNewPokerPending))
        .subscribe((pending: boolean) => this.pending = pending)
    );

    this.initCardSets();
  }

  ngOnInit() {
    this.pokerOptions = new PokerOptions();
  }

  ngOnDestroy() {
    this.sub.forEach(sub => {
      if (sub && sub instanceof Subscription)
        sub.unsubscribe();
    });
  }

  onFormSubmitted(pokerOptions: PokerOptions) {
    this.startNewPoker(pokerOptions);
  }

  private initCardSets() {
    this.cardSets = CardSets.list.map((cs: CardSet) => (
      { code: cs.name, label: cs.name }
    )).concat(
      { code: 'Custom', label: 'Custom' }
    );
  }

  private startNewPoker(pokerOptions: PokerOptions) {
    this.store.dispatch(new actions.CreatePoker(pokerOptions));
  }

}
