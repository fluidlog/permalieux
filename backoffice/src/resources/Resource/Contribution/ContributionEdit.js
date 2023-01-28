import React from 'react';
import { FormTab, TextInput, TabbedForm } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { OrganizationsInput, ThemesInput, DateTimeInput } from '../../../common/input';
import Edit from "../../../layout/edit/Edit";
import ContributionTitle from './ContributionTitle';

const ContributionEdit = props => (
  <Edit title={<ContributionTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <DateTimeInput source="pair:startDate" />
        <DateTimeInput source="pair:endDate" />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="heco:contributeTo" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ContributionEdit;
