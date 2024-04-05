import { SelectChangeEvent, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, InputLabel } from '@mui/material';
import { AllAccountTypes } from '../models';

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

interface AccountTypeSelectProps {
  selectedTypes: string[]
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>
}

export default function AccountTypeSelect({selectedTypes, setSelectedTypes}: AccountTypeSelectProps) {
  const handleChange = (event: SelectChangeEvent<typeof selectedTypes>) => {
    const {
      target: { value },
    } = event;
    setSelectedTypes(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <InputLabel id="account-type-selector-label">Account Types</InputLabel>
      <Select
        labelId='account-type-selector-label'
        multiple
        value={selectedTypes}
        onChange={handleChange}
        input={<OutlinedInput label="Account Types" />}
        renderValue={(selected: string[]) => selected.join(', ')}
        MenuProps={MenuProps}
        sx={{width: "50%"}}
      >
        {AllAccountTypes.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={selectedTypes.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </>
    
  )
}