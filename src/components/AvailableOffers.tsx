import { Box, FormControl, IconButton, Input, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OfferCard from './OfferCard'
import { AllAccountTypes, Offer } from '../models'
import { useState } from 'react';
import AccountTypeSelect from './AccountTypeSelect';

interface AvailableOffersProps {
  offers: Offer[]
  saveOffer: (offer: Offer) => void
}

export default function AvailableOffers({offers, saveOffer}: AvailableOffersProps) {
  const [selectedAccountTypes, setSelectedAccountTypes] = useState<string[]>(AllAccountTypes)

  const displayedOffers = offers.filter(o => selectedAccountTypes.includes(o.accountType))
  

  return (
    <Box component="section">
        <Typography variant='h2'>Available Offers</Typography>
        <FormControl sx={{display: "flex", flexDirection: 'row', width: 500}}>
          <AccountTypeSelect selectedTypes={selectedAccountTypes} setSelectedTypes={setSelectedAccountTypes} />
          {/* <Input /> */}
        </FormControl>
        
        <Box>
          {displayedOffers.map((offer, i) => 
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