import React from 'react';
import SelectArrayInput from 'react-admin';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledStack = styled(Stack)( () => ({
    border: `1px solid '#303030'`
  })
);

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function SkillsInputWithCategories( {valueLabel} ) {
  console.log("valueLabel", valueLabel)
  if (!valueLabel)
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
    Please select competences and categories
    </Paper>
  )

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
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
