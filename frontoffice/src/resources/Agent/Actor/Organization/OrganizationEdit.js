import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import { ImageField } from '@semapps/semantic-data-provider';
import { PersonsInput, ActivitiesInput, ThemesInput, DocumentsInput } from '../../../../inputs';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = props => (
  <Edit title={<OrganizationTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:webPage" fullWidth />
      <TextInput source="pair:phone" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <PersonsInput source="pair:affiliates" />
      <ActivitiesInput source="pair:involvedIn" />
      <ThemesInput source="pair:hasTopic" />
      <DocumentsInput source="pair:documentedBy" />
    </SimpleForm>
  </Edit>
);

export default OrganizationEdit;
