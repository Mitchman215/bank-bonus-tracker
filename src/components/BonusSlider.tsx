import { Box, Slider, Typography } from '@mui/material';
import { MaxBonus } from '../data';

interface BonusSliderProps {
  bonusRange: number[];
  setBonusRange: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function BonusSlider({
  bonusRange,
  setBonusRange,
}: BonusSliderProps) {
  const handleChange = (_: Event, newValue: number | number[]) => {
    setBonusRange(newValue as number[]);
  };

  return (
    <Box>
      <Typography>Bonus Range</Typography>
      <Slider
        value={bonusRange}
        valueLabelDisplay='auto'
        valueLabelFormat={(val) => `$${val}`}
        onChange={handleChange}
        step={50}
        min={0}
        max={MaxBonus}
      />
    </Box>
  );
}
