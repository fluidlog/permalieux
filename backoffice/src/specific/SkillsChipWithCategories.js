import React from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function SkillsChipWithCategories( {valueLabel} ) {
  // console.log("valueLabel", valueLabel)
  if (!valueLabel) return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: 600,
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      <Box sx={{ display: 'flex', p:1, m:1, fontSize: 14, fontWeight: 'medium', justifyContent:"center"}}>
        Aucune compétence n'a été sélectionnée, ouvrez l'outil de sélection des compétences ci-dessus
      </Box>
    </Paper>
  )

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: 600,
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {valueLabel.map((data, key) => {

        return (
          <ListItem key={key}>
            <Chip
              label={data.name}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
