import React from 'react';
import { SimpleShowLayout, ReferenceField, TextField } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  layout: {
    padding: '0 !important'
  }
}));

const NotePreview = props => {
  const classes = useStyles();
  return (
    <SimpleShowLayout className={classes.layout} {...props}>
      <ReferenceField source="attributedTo" reference="Project" link="show">
        <TextField source="pair:label" />
      </ReferenceField>
      <MarkdownField source="content" />
    </SimpleShowLayout>
  );
}

export default NotePreview;
