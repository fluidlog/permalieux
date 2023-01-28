import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import { DocumentsInput, ThemesInput, StatusInput, PersonsInput } from '../../../../inputs';
import ProjectTitle from './ProjectTitle';
import { ImageField } from '@semapps/semantic-data-provider';
import PairLocationInput from "../../../../pair/PairLocationInput";
import FrenchDateTimeInput from "../../../../pair/FrenchDateTimeInput";

const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:homePage" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <PersonsInput source="pair:involves" />
      <DocumentsInput source="pair:documentedBy" />
      <ThemesInput source="pair:hasTopic" />
      <StatusInput source="pair:hasStatus" />
      <FrenchDateTimeInput source="published" fullWidth />
      <FrenchDateTimeInput source="updated" fullWidth />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ProjectEdit;
