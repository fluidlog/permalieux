import React, { useState, useMemo, useEffect } from 'react';
import { FieldTitle, useInput, useLocale, useTranslate, useNotify } from 'react-admin';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { TextField, Typography, Grid, makeStyles } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@material-ui/icons/Add';
import { default as highlightMatch } from 'autosuggest-highlight/match';
import { default as highlightParse } from 'autosuggest-highlight/parse';
import throttle from 'lodash.throttle';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  }
}));

function CustomPopper(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <div {...other} />;
}

function CustomPaper(props) {
  return <Paper elevation={5} sx={{width:"270px"}} {...props} />;
}

const selectOptionText = (option, optionText) => {
  console.log("selectOptionText / option", option)
  console.log("selectOptionText / optionText", optionText)
  if (typeof option === 'string') {
    return option;
  } else if (option.label) {
    return option.label;
  } else if (typeof optionText === 'string') {
    return option[optionText];
  } else if (typeof optionText === 'function') {
    return optionText(option);
  }
};

export default function SkillSearchAutocomplete( props ) {
  const { source, initialValue, pendingValue, fetchLexicon, resource, optionText, label, setPendingValue, handleClose, parse, ...rest } = props;

  const classes = useStyles();
  const locale = useLocale();
  const translate = useTranslate();
  const notify = useNotify();

  // Do not pass the `parse` prop to useInput, as we manually call it on the onChange prop below
  const {
    input: { value, onChange, onBlur, onFocus },
    isRequired,
    meta: { error, submitError, touched }
  } = useInput({ source, initialValue, ...rest });

  const [keyword, setKeyword] = useState(null); // Typed keywords
  const [options, setOptions] = useState([]); // Options returned by MapBox

  const throttledFetchLexicon = useMemo(
    () =>
      throttle((keyword, callback) => {
        fetchLexicon({ keyword, locale })
          .then(data => {
            console.log("data",data)
            return callback(data)
          })
          .catch(e => notify(e.message, 'error'));
      }, 200),
    [locale, fetchLexicon, notify]
  );

  useEffect(() => {
    // Do not trigger search if text input is empty or if it is the same as the current value
    if (!keyword /*|| keyword === selectOptionText(value, optionText)*/) {
      return undefined;
    } else {
      throttledFetchLexicon(keyword, results => setOptions(results));
    }
  }, [value, keyword, throttledFetchLexicon]);

  // console.log("options", options)
  return (
    <Autocomplete
      // open
      freeSolo
      autoComplete
      value={value || null}
      onClose={(event, reason) => {
        if (reason === 'escape') {
          handleClose();
        }
      }}
      filterSelectedOptions
      // For some reasons, this prop has to be passed
      filterOptions={(options, params) => {
        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          options.push({
            label: params.inputValue,
            summary: `Ajouter "${params.inputValue}" au dictionnaire`,
            icon: AddIcon
          });
        }
        return options;
      }}
      clearOnBlur // Recommended for https://v4.mui.com/components/autocomplete/#creatable
      selectOnFocus // Recommended for https://v4.mui.com/components/autocomplete/#creatable
      handleHomeEndKeys // Recommended for https://v4.mui.com/components/autocomplete/#creatable
      getOptionLabel={option => {
        console.log("getOptionLabel / option", option)
        console.log("getOptionLabel / optionText", optionText)
        selectOptionText(option, optionText)
      }
      }
      getOptionSelected={(option, value) =>
        selectOptionText(option, optionText) === selectOptionText(value, optionText)
      }
      // This function is called when the user selects an option
      onChange={(event, newValue) => {
        // Parse only if the value is not null (happens if the user clears the value)
        if (newValue && parse) newValue = parse(newValue);
        onChange(newValue);
        setOptions([]);
      }}
      onInputChange={(event, newKeyword) => setKeyword(newKeyword)}
      noOptionsText={translate('ra.navigation.no_results')}
      disableCloseOnSelect
      PopperComponent={CustomPopper}
      PaperComponent={CustomPaper}
      renderTags={() => null}
      noOptionsText="No labels"
      renderInput={params => {
        // Autocomplete=off doesn't work anymore in modern browsers
        // https://stackoverflow.com/a/40791726/7900695
        params.inputProps.autoComplete = 'new-password';
        return (
          <TextField
            {...params}
            autoFocus
            inputProps={{
              ...params.inputProps,
              onBlur: e => {
                onBlur(e);
                if (params.inputProps.onBlur) {
                  params.inputProps.onBlur(e);
                }
              },
              onFocus: e => {
                onFocus(e);
                if (params.inputProps.onFocus) {
                  params.inputProps.onFocus(e);
                }
              }
            }}
            label={
              label !== '' &&
              label !== false && (
                <FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />
              )
            }
            error={!!(touched && (error || submitError))}
            // helperText={<InputHelperText touched={touched} error={error || submitError} helperText={helperText} />}
            {...rest}
          />
        );
      }}
      // renderOption={option => {
      //   console.log("renderOption / option", option)
      //   const matches = highlightMatch(option.label, keyword);
      //   const parts = highlightParse(option.label, matches);
      //
      //   return (
      //     <Grid container alignItems="center">
      //       <Grid item>{React.createElement(option.icon || LanguageIcon, { className: classes.icon })}</Grid>
      //       <Grid item xs>
      //         {typeof parts === 'string'
      //           ? parts
      //           : parts.map((part, index) => (
      //               <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
      //                 {part.text}
      //               </span>
      //             ))}
      //         <Typography variant="body2" color="textSecondary">
      //           {option.summary}
      //         </Typography>
      //       </Grid>
      //     </Grid>
      //   );
      // }}
    />

  )
}
