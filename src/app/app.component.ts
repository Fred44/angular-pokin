import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { GetUser } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new GetUser());
  }
}
