import { Container, Typography } from '@mui/material'
import data from './assets/data.json'
import AvailableOffers from './components/AvailableOffers'
import { useState } from 'react'

function App() {

  // TODO: state for available and saved offers
  useState(data)
  
  return (
    <Container>
      <Typography variant='h1' textAlign="center">Bank Bonus Tracker</Typography>
      <AvailableOffers />

    </Container>
  )
}

export default App
