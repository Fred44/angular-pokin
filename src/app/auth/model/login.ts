export class Credential {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class Registration {
  email: string;
  password: string;
  confirmPassword: string;
}
