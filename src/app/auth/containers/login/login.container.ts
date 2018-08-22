import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../../store/reducers';
import * as authActions from '../../store/auth.actions';
import { Observable } from 'rxjs';
import { AuthError } from '../../model';


@Component({
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  loginForm: FormGroup;

  error$: Observable<AuthError>;
  pending$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<fromAuth.State>) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    this.error$ = this.store.pipe(select(fromAuth.getLoginPageError));
    this.pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new authActions.Login(this.loginForm.value));
  }

}
