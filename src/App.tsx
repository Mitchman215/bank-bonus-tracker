import { Container, Grid, Typography } from '@mui/material';
import { GetAllOffers } from './data';
import AvailableOffers from './components/AvailableOffers';
import { useState } from 'react';
import SavedOffers from './components/SavedOffers';
import { Offer } from './models';

function App() {
  const [savedOffers, updateSavedOffers] = useState<Offer[]>([]);
  function RemoveOffer(offer: Offer) {
    console.log({ savedOffers });
    updateSavedOffers([...savedOffers.filter((o) => o != offer)]);
  }
  function AddOffer(offer: Offer) {
    console.log({ savedOffers });
    updateSavedOffers([...savedOffers, offer]);
  }

  const availableOffers = GetAllOffers().filter(
    (o) => !savedOffers.some((saved) => saved.id === o.id)
  );

  return (
    <Container>
      <Typography variant='h1' textAlign='center'>
        Bank Bonus Tracker
      </Typography>
      <Typography fontSize='2rem'>
        Did you know you can earn money just by opening up bank accounts? That's
        right! Check out these opening bonus offers...
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <AvailableOffers offers={availableOffers} saveOffer={AddOffer} />
        </Grid>
        <Grid item xs={5}>
          <SavedOffers offers={savedOffers} removeOffer={RemoveOffer} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
