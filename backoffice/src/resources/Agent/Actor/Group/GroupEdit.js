import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import { UsersInput, EventsInput, ThemesInput, DocumentsInput } from '../../../../pair';
import GroupTitle from './GroupTitle';

export const GroupEdit = props => (
  <EditWithPermissions title={<GroupTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <UsersInput source="pair:affiliates" />
      <EventsInput source="pair:involvedIn" />
      <ThemesInput source="pair:hasTopic" />
      <DocumentsInput source="pair:documentedBy" />
    </SimpleForm>
  </EditWithPermissions>
);

export default GroupEdit;
