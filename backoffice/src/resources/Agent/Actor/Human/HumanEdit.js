import React from 'react';
import { ImageInput, TabbedForm, TextInput, FormTab } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ActivitiesInput, LocationInput, SkillsInput, ThemesInput } from '../../../../common/input';
import { ImageField } from '@semapps/field-components';
import HumanTitle from './HumanTitle';

export const HumanEdit = props => (
  <EditWithPermissions
    title={<HumanTitle />}
    transform={data => ({ ...data, 'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}` })}
    {...props}
  >
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <LocationInput source="pair:hasLocation" fullWidth />
        <ImageInput source="image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
      </FormTab>
      <FormTab label="Relations">
        <ActivitiesInput source="pair:involvedIn" />
        <SkillsInput source="pair:offers" />
        <SkillsInput source="pair:aims" fullWidth />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default HumanEdit;
