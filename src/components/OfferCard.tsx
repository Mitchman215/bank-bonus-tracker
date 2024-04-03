interface Offer {
  "bank": string,
  "accountType": string,
  "bonus": number,
  "requirements": string
}

interface OfferCardProps {
  "offer": Offer
}

export default function OfferCard({offer}: OfferCardProps) {
  const {bank, accountType, bonus, requirements} = offer

  return (
    <li className='offer-card'>
      <p>{bank}</p>
      <p><i>{accountType}</i></p>
      <p><b>{bonus}</b></p>
      <p>{requirements}</p>
    </li>
  )
}