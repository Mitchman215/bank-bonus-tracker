import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from '@mui/material';

import { AccountType, Offer } from '../models';

interface OfferCardProps {
  offer: Offer;
  action: JSX.Element & React.ReactNode;
}

export default function OfferCard({ offer, action }: OfferCardProps) {
  const { bank, accountType, bonus, requirements } = offer;
  const title = `$${bonus} from ${bank}`;
  const subtitle = `${AccountType[accountType]} account`;

  return (
    <Card sx={{ textAlign: 'start', my: 2 }}>
      <CardHeader
        avatar={
          <Avatar
            variant='square'
            alt={`${bank}'s logo`}
            src={offer.image.toString()}
          />
        }
        action={action}
        title={title}
        titleTypographyProps={{ variant: 'h4' }}
        subheader={subtitle}
        subheaderTypographyProps={{ variant: 'subtitle1' }}
      />
      <CardContent>
        <Typography variant='h6' component='p'>
          Requirements:
        </Typography>
        <Typography paragraph>{requirements}</Typography>
        <Link href={offer.link.toString()}>Go to offer</Link>
      </CardContent>
    </Card>
  );
}
