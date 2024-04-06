export interface Offer {
  id: number;
  bank: string;
  accountType: AccountType;
  bonus: number;
  requirements: string;
  link: URL;
  image: URL;
}

export enum AccountType {
  Checking,
  Savings,
  Brokerage,
}

export type AccountTypeString = keyof typeof AccountType;

// source: https://stackoverflow.com/questions/48768774/how-to-get-all-the-values-of-an-enum-with-typescript
export const AllAccountTypes = [
  AccountType.Checking,
  AccountType.Savings,
  AccountType.Brokerage,
];
