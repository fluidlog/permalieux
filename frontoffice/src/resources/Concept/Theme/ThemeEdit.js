import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import ThemeTitle from './ThemeTitle';
import { ImageField } from "@semapps/semantic-data-provider";

export const ThemeEdit = props => (
  <Edit title={<ThemeTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default ThemeEdit;
