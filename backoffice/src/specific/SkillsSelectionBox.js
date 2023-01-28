import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { useCreate, useCreateSuggestionContext, useResourceContext } from 'react-admin';
import { Box, Button, Dialog, DialogActions, DialogContent, Grid } from '@material-ui/core';
import { LexiconAutocompleteInput } from '@semapps/interop-components';
import RadioCategories from './RadioCategories';
import SaveIcon from '@mui/icons-material/Save';

const SkillsSelectionBox = ({ fetchLexicon, selectData }) => {
  const { filter, onCancel, onCreate } = useCreateSuggestionContext();
  const resource = useResourceContext();
  const [value, setValue] = useState(filter || '');
  const [category, setCategory] = useState(null);
  const [create] = useCreate(resource);

  const onSubmit = useCallback(
    ({ lexicon }) => {
      // If we have no URI, it means we are creating a new definition
      // Delete the summary as it is "Ajouter XXX au dictionaire"
      const formResult = {skill:selectData(lexicon), category:category};
      console.log("formResult=", formResult)
      if (!lexicon.uri) delete lexicon.summary;
      create(
        {
          payload: {
            data: selectData(lexicon)
          }
        },
        {
          onSuccess: ({ data }) => {
            console.log("onSuccess/data=", data)
            setValue('');
            onCreate(data);
          }
        }
      );
    },
    [create, onCreate, selectData]
  );

  return (
    <Dialog open onClose={onCancel} fullWidth maxWidth="sm">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, dirtyFields }) => {
          // console.log("dirtyFields=",dirtyFields)
          return(
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item sx={12} md={12}>
                  <Box sx={{ display: 'flex', backgroundColor: '#999', borderRadius: 5, m:1, p:1, fontWeight:500, justifyContent: 'center', fontSize: 13 }}>
                    Sélectionnez une compétence et une catégorie
                  </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Box sx={{ backgroundColor: '#eee', borderRadius: 5, m:1, p:1, fontSize: 13 }}>
                    <LexiconAutocompleteInput
                      label="Compétences"
                      source="lexicon"
                      initialValue={value}
                      fetchLexicon={fetchLexicon}
                    />
                  </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Box sx={{ backgroundColor: '#eee', borderRadius: 5, m:1, p:1, fontSize: 13 }}>
                    <RadioCategories
                      category={category}
                      setCategory={setCategory}
                     />
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={onCancel}>Annuler</Button>
              <Button variant="contained" startIcon={<SaveIcon />} color="primary" type="submit" disabled={!dirtyFields.lexicon}>
                Ajouter
              </Button>
            </DialogActions>
          </form>
        )}}
      />
    </Dialog>
  );
};

export default SkillsSelectionBox;
