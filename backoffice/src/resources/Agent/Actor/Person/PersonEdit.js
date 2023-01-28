import React from 'react';
import { ImageInput, TabbedForm, TextInput, FormTab, AutocompleteInput } from 'react-admin';
import { ImageField } from '@semapps/field-components';
import { LocationInput, ThemesInput, JobsInput, TrainingsInput, ContributionsInput} from '../../../../common/input';
import PersonTitle from './PersonTitle';
import Edit from "../../../../layout/edit/Edit";
import { ReificationArrayInput } from '@semapps/semantic-data-provider';
import { ReferenceInput } from '@semapps/input-components';

export const PersonEdit = props => (
  <Edit
    title={<PersonTitle />}
    transform={data => ({ ...data, 'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}` })}
    {...props}
  >
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <LocationInput source="pair:hasLocation" fullWidth />
        <ThemesInput source="pair:hasTopic" fullWidth />
        <ImageInput source="image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
      </FormTab>
      <FormTab label="Formations">
        <TrainingsInput source="heco:attends" />
      </FormTab>
      <FormTab label="Postes">
        <JobsInput source="heco:holds" />
      </FormTab>
      <FormTab label="Contributions">
        <ContributionsInput source="heco:contributes" />
      </FormTab>
      <FormTab label="Compétences">
        <ReificationArrayInput source="heco:hasCompetence" reificationClass="heco:UserCompetence">
          <ReferenceInput reference="Skill" source="heco:hasCompetenceTerm">
            <AutocompleteInput optionText={record => record && `${record['pair:label']}`} />
          </ReferenceInput>
          <ReferenceInput reference="Category" source="heco:hasCompetenceQuality">
            <AutocompleteInput optionText={record => record && `${record['pair:label']}`} />
          </ReferenceInput>
        </ReificationArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PersonEdit;
