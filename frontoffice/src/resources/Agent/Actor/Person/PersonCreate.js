import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const PersonCreate = props => (
  <Create title="Inviter un utilisateur" transform={data => ({ ...data, 'pair:label': data['pair:firstName'], 'pair:affiliatedBy': process.env.REACT_APP_LOCAL_GROUP_URL, 'foaf:email': data['pair:e-mail'], 'foaf:name': data['pair:firstName'], 'foaf:familyName': data['pair:lastName'] })} {...props}>
    <SimpleForm>
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:lastName" fullWidth />
      <TextInput source="pair:e-mail" fullWidth />
    </SimpleForm>
  </Create>
);

export default PersonCreate;
