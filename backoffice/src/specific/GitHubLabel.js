import React from 'react';
// import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SkillsInputWithCategories from './SkillsInputWithCategories'

const StyledPopper = styled(Popper)( ({ theme }) => ({
  border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}));

export default function GitHubLabel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([labels[1], labels[11]]);
  const [pendingValue, setPendingValue] = React.useState([]);
  const theme = useTheme();

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
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

  return (
    <React.Fragment>
      <Box sx={{ width: 300, fontSize: 13 }}>
        <ButtonBase disableRipple aria-describedby={id} onClick={handleClick}>
          <span>Labels</span>
          <SettingsIcon />
        </ButtonBase>
        <SkillsInputWithCategories valueLabel={value} />
      </Box>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
                }`,
                padding: '8px 10px',
                fontWeight: 600,
              }}
            >
              Apply labels to this pull request
            </Box>
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === 'escape') {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === 'keydown' &&
                  event.key === 'Backspace' &&
                  reason === 'removeOption'
                ) {
                  return;
                }
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={DoneIcon}
                    sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                    style={{
                      visibility: selected ? 'visible' : 'hidden',
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      borderRadius: '3px',
                      mr: 1,
                      mt: '2px',
                    }}
                    style={{ backgroundColor: option.color }}
                  />
                  <Box
                    sx={{
                      flexGrow: 1,
                      '& span': {
                        color:
                          theme.palette.mode === 'light' ? '#586069' : '#8b949e',
                      },
                    }}
                  >
                    {option.name}
                    <br />
                    <span>{option.description}</span>
                  </Box>
                  <Box
                    component={CloseIcon}
                    sx={{ opacity: 0.6, width: 18, height: 18 }}
                    style={{
                      visibility: selected ? 'visible' : 'hidden',
                    }}
                  />
                </li>
              )}
              options={[...labels].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <InputBase
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter labels"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  );
}

// From https://github.com/abdonrd/github-labels
const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
  },
  {
    name: 'help wanted',
    color: '#008672',
    description: 'Extra attention is needed',
  },
  {
    name: 'priority: critical',
    color: '#b60205',
    description: '',
  },
  {
    name: 'priority: high',
    color: '#d93f0b',
    description: '',
  },
  {
    name: 'priority: low',
    color: '#0e8a16',
    description: '',
  },
  {
    name: 'priority: medium',
    color: '#fbca04',
    description: '',
  },
  {
    name: "status: can't reproduce",
    color: '#fec1c1',
    description: '',
  },
  {
    name: 'status: confirmed',
    color: '#215cea',
    description: '',
  },
  {
    name: 'status: duplicate',
    color: '#cfd3d7',
    description: 'This issue or pull request already exists',
  },
  {
    name: 'status: needs information',
    color: '#fef2c0',
    description: '',
  },
  {
    name: 'status: wont do/fix',
    color: '#eeeeee',
    description: 'This will not be worked on',
  },
  {
    name: 'type: bug',
    color: '#d73a4a',
    description: "Something isn't working",
  },
  {
    name: 'type: discussion',
    color: '#d4c5f9',
    description: '',
  },
  {
    name: 'type: documentation',
    color: '#006b75',
    description: '',
  },
  {
    name: 'type: enhancement',
    color: '#84b6eb',
    description: '',
  },
  {
    name: 'type: epic',
    color: '#3e4b9e',
    description: 'A theme of work that contain sub-tasks',
  },
  {
    name: 'type: feature request',
    color: '#fbca04',
    description: 'New feature or request',
  },
  {
    name: 'type: question',
    color: '#d876e3',
    description: 'Further information is requested',
  },
];
