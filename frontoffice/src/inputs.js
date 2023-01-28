import React from 'react';
import { ReferenceArrayInput } from '@semapps/semantic-data-provider';
import { AutocompleteArrayInput } from 'react-admin';

export const OrganizationsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Organization" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const GroupsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Group" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ActorsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Actor" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Activity" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const DocumentsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Document" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Event" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ThemesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Theme" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const StatusInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Status" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const PersonsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const AgentsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Agent" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);
