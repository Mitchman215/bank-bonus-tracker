import { Box, Typography } from '@mui/material'
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
          {offers.map((offer) => 
            <OfferCard offer={offer} />
          )}
        </Box>
      </Box>
  )
}