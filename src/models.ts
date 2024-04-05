export interface Offer {
  bank: string;
  accountType: string;
  bonus: number;
  requirements: string;
}

export const AllAccountTypes = ['checking', 'savings', 'brokerage'];
