import offers from './assets/offers.json';
import { AccountType, AccountTypeString, Offer } from './models';

const cachedAllOffers: Offer[] = [];

export let MaxBonus = 0;

export function GetAllOffers(): Offer[] {
  if (cachedAllOffers.length !== 0) {
    return cachedAllOffers;
  }

  let id = 0;
  for (let i = 0; i < offers.length; i++) {
    const o = offers[i];
    const accountType = o.accountType as AccountTypeString;
    const link = new URL(o.link);
    if (o.bonus > MaxBonus) {
      MaxBonus = o.bonus;
    }

    cachedAllOffers.push({
      id: id++,
      bank: o.bank,
      accountType: AccountType[accountType],
      bonus: o.bonus,
      requirements: o.requirements,
      link: link,
      image: new URL(
        `https://www.google.com/s2/favicons?domain_url=${link.origin}&sz=256`
      ),
    });
  }

  return cachedAllOffers;
}
