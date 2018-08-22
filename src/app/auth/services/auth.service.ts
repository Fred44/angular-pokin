import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Credential, Registration } from '../model';
import { User } from '../../core/model';
import { map, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  getUser(): Observable<User> {
    return this.afAuth.authState.pipe(
      switchMap(authData => {
        if (authData) {
          return from(authData.getIdToken(false)).pipe(
            map(idToken => {
              const u = new User(authData);
              u.idToken = idToken;
              return u;
            })
          );

        } else {
          return of(null);
        }
      })
    );
  }

  signInWithEmailAndPassword(credential: Credential) {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(credential.email, credential.password)
    );
  }

  createUserWithEmailAndPassword(registration: Registration) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(
        registration.email,
        registration.password
      )
    );
  }

  sendPasswordResetEmail(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logout() {
    return from(this.afAuth.auth.signOut());
  }
}
