import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
  const title = `$${bonus} from ${bank}`
  const subtitle = `${accountType} account`

  return (
    <Card sx={{ maxWidth: 550, textAlign: "start", my: 2 }}>
      <CardHeader avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="add button" color='primary' size='large'>
            <AddCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        }
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