import React from 'react';
import { SimpleForm, TextInput, SelectInput, ImageInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { ReferenceInput } from '@semapps/semantic-data-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { DocumentsInput } from '../../../inputs';
import DocumentTitle from './DocumentTitle';

export const DocumentEdit = props => (
  <Edit title={<DocumentTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:DocumentType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <DocumentsInput source="pair:references" />
      <DocumentsInput source="pair:referencedBy" />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
