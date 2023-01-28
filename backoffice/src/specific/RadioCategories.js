import React from 'react';
import { Box, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import listSkillsCategories from './listSkillsCategories';
import { makeStyles } from '@material-ui/core/styles';

const SkillsSelectionBox = ( {category, setCategory} ) => {

  const handleChange = (e) => {
    // console.log("setCategory/e=", e.target.value)
    setCategory(e.target.value);
  }

  const useStyles = makeStyles({
    // Applied to <Radio />
    root: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    // Applied to <FormControlLabel />
    // label: {
    //   fontSize: 13
    // }
  });

  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        {...props}
      />
    );
  }

  return (
    <Box sx={{ backgroundColor: '#eee', borderRadius: 5, m:1, p:1, fontSize: 12 }}>
      <RadioGroup
        aria-label="category"
        name="category"
        onChange={handleChange}
      >
      {listSkillsCategories.map( (m) => (
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
  )
}

export default SkillsSelectionBox;
