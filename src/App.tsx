import { Box, Container, Typography } from '@mui/material'
import {GetAllOffers} from './data'
import AvailableOffers from './components/AvailableOffers'
import { useState } from 'react'
import SavedOffers from './components/SavedOffers'
import { Offer } from './models'

function App() {
  const [savedOffers, updateSavedOffers] = useState<Offer[]>([])
  function RemoveOffer(offer: Offer) {
    console.log({savedOffers})
    updateSavedOffers([...savedOffers.filter(o => o != offer)])
  }
  function AddOffer(offer: Offer) {
    console.log({savedOffers})
    updateSavedOffers([...savedOffers, offer])
  }
  console.log({savedOffers})
  const availableOffers = GetAllOffers().filter(o => {
    console.log("includes", o.bank, savedOffers.some(saved => saved.id === o.id))
    return !savedOffers.some(saved => saved.id === o.id)
  })

  console.log()
  console.log(savedOffers[0], "equals", GetAllOffers()[0], savedOffers[0] === GetAllOffers()[0])

  return (
    <Container>
      <Typography variant='h1' textAlign="center">Bank Bonus Tracker</Typography>
      <Typography fontSize="2rem">Did you know you can earn money just by opening up bank accounts? That's right! Check out these opening bonus offers...</Typography>
      <Box sx={{display: "flex", gap: "2rem", my: "2rem"}}>
        <AvailableOffers offers={availableOffers} saveOffer={AddOffer} />
        <SavedOffers offers={savedOffers} removeOffer={RemoveOffer}/>
      </Box>
    </Container>
  )
}

export default App
