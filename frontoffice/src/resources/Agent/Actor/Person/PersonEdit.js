import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { ImageField } from '@semapps/semantic-data-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import PersonTitle from './PersonTitle';
import { ActivitiesInput, GroupsInput, ThemesInput } from '../../../../inputs';
import PairLocationInput from "../../../../pair/PairLocationInput";

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} transform={data => ({ ...data, 'pair:label': data['pair:firstName'], 'foaf:email': data['pair:e-mail'], 'foaf:name': data['pair:firstName'] })} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:e-mail" fullWidth helperText="N'est pas visible sur le site, mais permet aux personnes de vous contacter via un formulaire." />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <MarkdownInput source="pair:description" fullWidth />
      <ActivitiesInput source="pair:involvedIn" helperText="A quelles actions locales contribuez-vous ?" />
      <GroupsInput source="pair:affiliatedBy" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth helperText="Vous pouvez mettre l'adresse de votre commune si vous ne souhaitez pas être localisable." />
    </SimpleForm>
  </Edit>
);

export default PersonEdit;
