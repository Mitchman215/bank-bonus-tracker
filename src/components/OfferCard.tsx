import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'

import { Offer } from '../models';

interface OfferCardProps {
  offer: Offer,
  action: JSX.Element & React.ReactNode
}

export default function OfferCard({offer, action}: OfferCardProps) {
  const {bank, accountType, bonus, requirements} = offer
  const title = `$${bonus} from ${bank}`
  const subtitle = `${accountType} account`

  return (
    <Card sx={{ maxWidth: 550, textAlign: "start", my: 2 }}>
      <CardHeader avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={action}
        title={title}
        titleTypographyProps={{variant:'h4' }}
        subheader={subtitle}
        subheaderTypographyProps={{variant:'subtitle1' }}
      />
      <CardContent>
        <Typography variant="h6" component="p">Requirements:</Typography>
        <Typography paragraph>{requirements}</Typography>
      </CardContent>
    </Card>
  )
}