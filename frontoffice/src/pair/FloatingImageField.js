import React from "react";
import { makeStyles } from '@material-ui/core';
import { useRecordContext } from "react-admin";

const useStyles = makeStyles(() => ({
  image: {
    float: 'left',
    maxWidth: '30%',
    marginRight: 20,
    marginBottom: 20
  }
}));

const FloatingImageField = props => {
  const { source } = props;
  const classes = useStyles();
  const record = useRecordContext(props);
  return <img src={record[source]} alt={record['pair:label']} className={classes.image} />;
};

export default FloatingImageField;
