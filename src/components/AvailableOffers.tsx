import { Box, IconButton, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OfferCard from './OfferCard'
import { Offer } from '../models'

interface AvailableOffersProps {
  offers: Offer[]
  saveOffer: (offer: Offer) => void
}

export default function AvailableOffers({offers, saveOffer}: AvailableOffersProps) {
  return (
    <Box component="section">
        <Typography variant='h2'>Available Offers</Typography>
        <Box>
          {offers.map((offer, i) => 
            <OfferCard key={i} offer={offer} action={
              <IconButton aria-label="add button" color='primary' size='large' onClick={() => saveOffer(offer)}>
                <AddCircleOutlineIcon fontSize="inherit" />
              </IconButton>
            }/>
          )}
        </Box>
      </Box>
  )
}