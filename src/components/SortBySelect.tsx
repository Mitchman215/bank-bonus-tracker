import { Select, SelectChangeEvent, MenuItem, OutlinedInput, InputLabel } from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface SortBySelectProps {
  sortBy: string
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

export default function SortBySelect({sortBy, setSortBy}: SortBySelectProps) {
  return (
    <>
      <InputLabel id="sort-by-selector-label">Account Types</InputLabel>
      <Select 
      labelId='sort-by-selector-label'
      value={sortBy}
      input={<OutlinedInput label="Sort by" />}
      onChange={(e: SelectChangeEvent) => setSortBy(e.target.value)}
      MenuProps={MenuProps}
      >
        <MenuItem value="descending bonus">Descending bonus $</MenuItem>
        <MenuItem value="ascending bonus">Ascending bonus $</MenuItem>
      </Select>
    </>
    
  )
}