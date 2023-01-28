import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const ProjectCreate = props => (
  <Create {...props}>
    <SimpleForm initialValues={{ 'pair:supportedBy': process.env.REACT_APP_LOCAL_GROUP_URL }}>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Create>
);

export default ProjectCreate;
