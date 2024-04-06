import { SelectChangeEvent, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, InputLabel } from '@mui/material';
import { AccountType, AccountTypeString, AllAccountTypes } from '../models';

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
  selectedTypes: AccountType[]
  setSelectedTypes: React.Dispatch<React.SetStateAction<AccountType[]>>
}

export default function AccountTypeSelect({selectedTypes, setSelectedTypes}: AccountTypeSelectProps) {
  const handleChange = (event: SelectChangeEvent<typeof selectedTypes>) => {
    const rawVal = event.target.value;
    if (typeof rawVal === 'string') {
      const selected = rawVal.split(',').map(s => AccountType[s as AccountTypeString])
      setSelectedTypes(selected);
    } else {
      setSelectedTypes(rawVal)
    }
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
        renderValue={selected => selected.map(s => AccountType[s]).join(', ')}
        MenuProps={MenuProps}
      >
        {AllAccountTypes.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={selectedTypes.indexOf(type) > -1} />
            <ListItemText primary={AccountType[type]} />
          </MenuItem>
        ))}
      </Select>
    </>
    
  )
}