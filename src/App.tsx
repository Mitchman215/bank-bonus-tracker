import { Container, Typography } from '@mui/material'
import data from './assets/data.json'
import AvailableOffers from './components/AvailableOffers'
import { useState } from 'react'
import SavedOffers from './components/SavedOffers'
import { Offer } from './models'

function App() {

  // TODO: state for available and saved offers
  const [savedOffers, updateSavedOffers] = useState<Offer[]>([])
  function RemoveOffer(offer: Offer) {
    updateSavedOffers([...savedOffers.filter(o => o != offer)])
  }
  function AddOffer(offer: Offer) {
    updateSavedOffers([...savedOffers, offer])
  }
  const availableOffers = data.filter(o => savedOffers.includes(o))

  return (
    <Container>
      <Typography variant='h1' textAlign="center">Bank Bonus Tracker</Typography>
      <AvailableOffers />
      <SavedOffers offers={savedOffers} removeOffer={RemoveOffer}/>
    </Container>
  )
}

export default App
