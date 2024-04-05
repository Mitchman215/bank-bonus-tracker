import { Box, IconButton, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
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
          {offers.map((offer, i) => 
            <OfferCard key={i} offer={offer} action={
              <IconButton aria-label="add button" color='error' size='large' onClick={() => removeOffer(offer)}>
                <RemoveCircleOutlineIcon fontSize="inherit" />
              </IconButton>
            } />
          )}
        </Box>
    </Box>
  )
}