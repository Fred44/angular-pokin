import * as firebase from 'firebase';

export class User {

  authState: firebase.User;
  userId: string;
  email: string;
  displayName: string;
  idToken?: string;

  constructor(authState?: firebase.User) {
    if (authState) {
      this.authState = authState;
      this.userId = authState.uid;
      this.email = authState.providerData[0].email;
      if (authState.providerData[0].displayName) {
        this.displayName = authState.providerData[0].displayName
      } else {
        this.displayName = this.email.split('@')[0] + new Date().getTime();
      }
    }
  }
}
