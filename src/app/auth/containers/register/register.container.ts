import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../../store/reducers';
import * as registerActions from '../../store/register.actions';
import { Observable } from 'rxjs';
import { AuthError } from '../../model';

@Component({
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.scss']
})
export class RegisterContainer implements OnInit {

  registerForm: FormGroup;

  error$: Observable<AuthError>;
  pending$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<fromAuth.State>) {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {validator: registerFormValidator});

    this.error$ = this.store.pipe(select(fromAuth.getRegisterPageError));
    this.pending$ = this.store.pipe(select(fromAuth.getRegisterPagePending));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new registerActions.Register({registration: this.registerForm.value}));
  }

}

function registerFormValidator(fg: FormGroup): {[key: string]: boolean} {

  //Passwords must be the same
  if (fg.get('password').value !== fg.get('confirmPassword').value) {
    return {'passwordmismatch': true};
  }

  return null;
}
