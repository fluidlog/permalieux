import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm initialValues={{ 'pair:partOf': process.env.REACT_APP_LOCAL_GROUP_URL, 'pair:partnerOf': process.env.REACT_APP_LOCAL_GROUP_URL }}>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Create>
);

export default OrganizationCreate;
