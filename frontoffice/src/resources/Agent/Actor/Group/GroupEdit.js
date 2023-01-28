import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import { PersonsInput } from '../../../../inputs';
import GroupTitle from './GroupTitle';

export const GroupEdit = props => (
  <Edit title={<GroupTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" />
      <MarkdownInput source="pair:description" fullWidth />
      <PersonsInput source="pair:affiliates" />
    </SimpleForm>
  </Edit>
);

export default GroupEdit;
