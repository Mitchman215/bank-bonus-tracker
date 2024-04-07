import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OfferCard from './OfferCard';
import { AccountType, AllAccountTypes, Offer } from '../models';
import { useState } from 'react';
import AccountTypeSelect from './AccountTypeSelect';
import SortBySelect from './SortBySelect';
import BonusSlider from './BonusSlider';
import { MaxBonus } from '../data';

interface AvailableOffersProps {
  offers: Offer[];
  saveOffer: (offer: Offer) => void;
}

export default function AvailableOffers({
  offers,
  saveOffer,
}: AvailableOffersProps) {
  const [selectedAccountTypes, setSelectedAccountTypes] =
    useState<AccountType[]>(AllAccountTypes);
  const [sortBy, setSortBy] = useState<string>('');
  const [bonusRange, setBonusRange] = useState<number[]>([0, MaxBonus]);

  const displayedOffers = offers
    .filter((o) => selectedAccountTypes.includes(o.accountType))
    .sort((a, b) => {
      if (sortBy === 'ascending bonus') {
        return a.bonus - b.bonus;
      } else {
        return b.bonus - a.bonus;
      }
    });

  function onResetClick() {
    setSelectedAccountTypes(AllAccountTypes);
    setSortBy('descending bonus');
    setBonusRange([0, MaxBonus]);
  }

  return (
    <Box component='section'>
      <Typography variant='h2'>Available Offers</Typography>
      <Grid container spacing={2} p={1} mt={2} boxShadow={1} borderRadius={4}>
        <Grid item xs={6}>
          <AccountTypeSelect
            selectedTypes={selectedAccountTypes}
            setSelectedTypes={setSelectedAccountTypes}
          />
        </Grid>
        <Grid item xs={6}>
          <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
        </Grid>
        <Grid item xs={6}>
          <BonusSlider bonusRange={bonusRange} setBonusRange={setBonusRange} />
        </Grid>
        <Grid item xs={6} textAlign='center'>
          <Button variant='contained' onClick={onResetClick}>
            Reset
          </Button>
        </Grid>
      </Grid>

      <Box>
        {displayedOffers.map((offer, i) => (
          <OfferCard
            key={i}
            offer={offer}
            action={
              <IconButton
                aria-label='add button'
                color='primary'
                size='large'
                onClick={() => saveOffer(offer)}
              >
                <AddCircleOutlineIcon fontSize='inherit' />
              </IconButton>
            }
          />
        ))}
      </Box>
    </Box>
  );
}
