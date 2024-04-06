import offers from './assets/offers.json';
import { AccountType, AccountTypeString, Offer } from './models';

export function GetAllOffers(): Offer[] {
  let id = 0;
  return offers.map((o) => {
    const accountType = o.accountType as AccountTypeString;
    const link = new URL(o.link);
    const image = new URL('/favicon.ico', link.origin);
    return {
      id: id++,
      bank: o.bank,
      accountType: AccountType[accountType],
      bonus: o.bonus,
      requirements: o.requirements,
      link: link,
      image: image,
    };
  });
}
