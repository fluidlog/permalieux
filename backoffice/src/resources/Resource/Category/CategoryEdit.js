import React from 'react';
import { FormTab, TabbedForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import { AgentsInput } from '../../../common/input';
import CategoryTitle from './CategoryTitle';

export const CategoryEdit = props => (
  <EditWithPermissions title={<CategoryTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <AgentsInput source="pair:categorizedBy" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default CategoryEdit;
