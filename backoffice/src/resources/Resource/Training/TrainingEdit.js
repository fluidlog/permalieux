import React from 'react';
import { FormTab, TextInput, TabbedForm } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { OrganizationsInput, ThemesInput, DateTimeInput } from '../../../common/input';
import Edit from "../../../layout/edit/Edit";
import TrainingTitle from './TrainingTitle';

const TrainingEdit = props => (
  <Edit title={<TrainingTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <DateTimeInput source="pair:startDate" />
        <DateTimeInput source="pair:endDate" />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="heco:providedBy" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default TrainingEdit;
