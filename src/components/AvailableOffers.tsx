import { Box, Typography } from '@mui/material'
import data from '../assets/data.json'
import OfferCard from './OfferCard'

export default function AvailableOffers() {
  return (
    <Box component="section">
        <Typography variant='h2'>Available Offers</Typography>
        <Box>
          {data.map((offer) => 
            <OfferCard offer={offer} />
          )}
        </Box>
      </Box>
  )
}