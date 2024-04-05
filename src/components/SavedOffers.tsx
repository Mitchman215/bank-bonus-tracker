import { Box, Typography } from '@mui/material';
import { Offer } from '../models';
import OfferCard from './OfferCard';

interface SavedOfferProps {
  offers: Offer[]
  removeOffer: (offer: Offer) => void
}

export default function SavedOffers({offers, removeOffer} : SavedOfferProps) {
  return (
    <Box component='section'>
      <Typography variant='h2'>Saved Offers</Typography>
        <Box>
          {offers.map((offer) => 
            <OfferCard offer={offer} />
          )}
        </Box>
    </Box>
  )
}