import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import PageTitle from './PageTitle';

export const PageEdit = props => (
  <Edit title={<PageTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="semapps:title" fullWidth />
      <MarkdownInput source="semapps:content" fullWidth />
    </SimpleForm>
  </Edit>
);

export default PageEdit;
