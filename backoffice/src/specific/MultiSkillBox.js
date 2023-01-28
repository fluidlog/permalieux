import React, { useCallback, useState } from 'react';
import { useResourceContext, useCreate, useCreateSuggestionContext } from 'react-admin';
import { styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import SkillsChipWithCategories from './SkillsChipWithCategories'
import SkillSearchAutocomplete from './SkillSearchAutocomplete'
import { SelectCategory } from './SelectCategory'
import { LexiconAutocompleteInput, fetchWikidata } from "@semapps/interop-components";
import labels from "./labels"

const StyledPopper = styled(Popper)( () => ({
  border: `10px solid '#e1e4e8'`,
  boxShadow: `0 8px 24px 'rgba(149, 157, 165, 0.2)'`,
  borderRadius: 5,
  width: 600,
  zIndex : 1300,
  fontSize: 13,
  color: '#24292e',
  backgroundColor: '#ccc',
}));

const ButtonOpenPopper = styled(Button)( () => ({
  fontSize: 15,
  width: '100%',
  textAlign: 'left',
  paddingBottom: 8,
  color: '#586069',
  '& span': {
    width: '100%',
  },
}));

const MultiSkillBox = ({ fetchLexicon, selectData }) => {
  // const [value, setValue] = useState([labels[1], labels[11]]);
  const [value, setValue] = useState('');
  const [pendingValue, setPendingValue] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState(null);

  const handleClickPopper = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClickButtonValidation = (event) => {
    handleClose()
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  // <LexiconAutocompleteInput
  //   label="Titre"
  //   source="lexicon"
  //   initialValue={value}
  //   fetchLexicon={fetchWikidata()}
  // />

  // <SkillSearchAutocomplete
  //   label="Compétences"
  //   source="lexicon"
  //   initialValue={value}
  //   fetchLexicon={fetchWikidata()}
  //   pendingValue={pendingValue}
  //   setPendingValue={setPendingValue}
  //   handleClose={handleClose}
  // />


  return (
    <React.Fragment>
      <Box sx={{ width: 600 }}>
        <ButtonOpenPopper disableRipple aria-describedby={id} onClick={handleClickPopper}>
          <span>Sélection des compétences</span>
          <SettingsIcon />
        </ButtonOpenPopper>
        <SkillsChipWithCategories valueLabel={value} />
      </Box>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Box sx={{ display: 'flex', p:1, m:1, boxShadow: 5, bgcolor: '#999', borderRadius: 1, fontSize: 16, fontWeight: 'medium', justifyContent:"center"}}>
                  Selectionne une compétence ET une catégorie
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p:1, m:1, boxShadow: 5, bgcolor: '#999', borderRadius: 1, justifyContent:"center"}}>
                <LexiconAutocompleteInput
                  label="Compétence"
                  source="lexicon"
                  initialValue={value}
                  fetchLexicon={fetchWikidata()}
                  pendingValue={pendingValue}
                  setPendingValue={setPendingValue}
                />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p:1, m:1, boxShadow: 5, bgcolor: '#999', borderRadius: 1, fontSize: 16, fontWeight: 'medium', justifyContent:"center"}}>
                  <SelectCategory
                  category={category}
                  setCategory={setCategory}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box sx={{ display: 'flex', p:1, m:1, boxShadow: 5, bgcolor: '#999', borderRadius: 1, justifyContent:"center"}}>
                  <Button
                    color="secondary"
                    onClick={handleClickButtonValidation}
                    startIcon={<SaveIcon />}
                    variant="contained"
                  >
                    Enregistrer
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  );
}

export default MultiSkillBox;
