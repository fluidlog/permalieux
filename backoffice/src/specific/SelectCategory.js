import React from 'react';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import skillsCategories from './skillsCategories';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // component default is "inline-flex", using "flex" makes the
    // label + control group use the entire width of the parent element
    padding: "0px",
    margin: "0px"
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      // checkedIcon={<span className={classes.checkedIcon} />}
      // icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export const SelectCategory = ( props ) => {
  const { category, setCategory } = props;

  const handleChange = (event) => {
    const category = event.target.value
    console.log("category", category)
    setCategory(category);
  };

  return (
    <Box sx={{ backgroundColor: '#eee', borderRadius: 5, margin: "10px", padding: "15px", fontSize: 13 }}>
      <RadioGroup
        aria-label="category"
        name="category"
        onChange={handleChange}
      >
      {skillsCategories.map( (m) => (
        <Box sx={{ display: "flex", flexDirection: 'column' }}>{m.meta}
          {m.categories.map(c => (
              <FormControlLabel
                value={c.name}
                control={<StyledRadio size="small" color="primary" />}
                label={c.name}
                key={c.name}
              />
            ))}
        </Box>
        ))}
      </RadioGroup>
  </Box>
)}
