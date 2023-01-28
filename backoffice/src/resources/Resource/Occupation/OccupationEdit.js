import React from 'react';
import { FormTab, TextInput, TabbedForm } from 'react-admin';
import Edit from "../../../layout/edit/Edit";
import { JobsInput } from '../../../common/input';
import OccupationTitle from './OccupationTitle';

export const OccupationEdit = props => (
  <Edit title={<OccupationTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <JobsInput source="heco:offeredByJob" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default OccupationEdit;
