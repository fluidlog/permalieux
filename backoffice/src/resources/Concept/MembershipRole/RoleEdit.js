import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import Edit from "../../../layout/edit/Edit";
import RoleTitle from './RoleTitle';

export const RoleEdit = props => (
  <Edit title={<RoleTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default RoleEdit;
