export class User {
  id: number;
  login: string;
  passwordCash: string;
  role: TypeRole;
}

type TypeRole = 'admin' | 'user';
