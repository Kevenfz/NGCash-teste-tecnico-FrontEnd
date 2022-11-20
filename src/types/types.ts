export interface UserType {
  user?: string;
  email: string;
  password?: string;
}

export interface RegisterUserType {
  user: string;
  email: string;
  password: string;
}

export interface TransactionsType {
  user: string;
  typeCash: boolean;
  value: number;
  date: string;
}
