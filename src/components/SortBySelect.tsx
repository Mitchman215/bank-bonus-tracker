import {
  Select,
  SelectChangeEvent,
  MenuItem,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';

interface SortBySelectProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function SortBySelect({ sortBy, setSortBy }: SortBySelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id='sort-by-selector-label'>Sort By</InputLabel>
      <Select
        labelId='sort-by-selector-label'
        value={sortBy}
        input={<OutlinedInput label='Sort by' />}
        onChange={(e: SelectChangeEvent) => setSortBy(e.target.value)}
      >
        <MenuItem value='descending bonus'>Descending bonus $</MenuItem>
        <MenuItem value='ascending bonus'>Ascending bonus $</MenuItem>
      </Select>
    </FormControl>
  );
}
