import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { nbaTeams } from './nbaTeams';

const NbaAutocomplete = () => {
  return (
    <Autocomplete
      id="tags-standard"
      multiple
      size="medium"
      options={nbaTeams}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="NBA Teams"
        />
      )}
      getOptionLabel={option => option.name}
      style={{ width: 270 }}
    />
  );
};

export default NbaAutocomplete;
