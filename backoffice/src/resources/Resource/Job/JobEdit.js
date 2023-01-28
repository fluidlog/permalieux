import React from 'react';
import { FormTab, TextInput, TabbedForm, SelectInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { OrganizationsInput, OccupationsInput, ThemesInput, DateTimeInput } from '../../../common/input';
import { ReferenceInput } from '@semapps/input-components';
import Edit from "../../../layout/edit/Edit";
import JobTitle from './JobTitle';

const JobEdit = props => (
  <Edit title={<JobTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <ReferenceInput reference="Type" source="heco:hasType" filter={{ a: 'heco:JobType' }}>
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <DateTimeInput source="pair:startDate" />
        <DateTimeInput source="pair:endDate" />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="heco:heldAt" />
        <OccupationsInput source="heco:hasOccupation" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default JobEdit;
