import React from 'react';
import { ReferenceArrayInput, MultiServerAutocompleteArrayInput } from "@semapps/input-components";
import { LexiconCreateDialog, fetchESCO, fetchWikidata } from "@semapps/interop-components"

const ifTwoLetters = ({ q }) => !!(q && q.length > 1);
const filterOnlyLabel = { _predicates: ['pair:label'] };
const filterAllServers = { _servers: '@all' };

export const OrganizationsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Organization" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ActorsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Actor" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const OccupationsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Occupation" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const HumanInput = ({ label, source }) => {
  return (
  <ReferenceArrayInput label={label} reference="Human" source={source}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
)};

export const ResourcesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Resource" source={source} enableGetChoices={ifTwoLetters}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 0} fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Activity" source={source} enableGetChoices={ifTwoLetters} filter={filterOnlyLabel}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const DocumentsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Document" source={source} enableGetChoices={ifTwoLetters} filter={filterOnlyLabel}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Event" source={source} enableGetChoices={ifTwoLetters} filter={filterOnlyLabel}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const JobsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Job" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TrainingsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Training" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ContributionsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Contribution" source={source} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TasksInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Task" source={source} enableGetChoices={ifTwoLetters} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 0} fullWidth />
  </ReferenceArrayInput>
);

export const SkillsInput = (props) => (
  <ReferenceArrayInput reference="Skill" {...props} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput
      optionText="pair:label"
      // shouldRenderSuggestions={(value) => value.length > 0}
      create={
        <LexiconCreateDialog
          fetchLexicon={fetchESCO('https://esco.commondata.one')}
          selectData={data => ({
            'pair:label': data.label,
            'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
          })}
        />
      }
      fullWidth
    />
  </ReferenceArrayInput>
);

export const ThemesInput = (props) => (
  <ReferenceArrayInput reference="Theme" filter={filterAllServers} {...props}>
    <MultiServerAutocompleteArrayInput
      optionText="pair:label"
      // shouldRenderSuggestions={(value) => value.length > 0}
      create={
        <LexiconCreateDialog
          fetchLexicon={fetchWikidata()}
          selectData={data => ({
            'pair:label': data.label,
            'pair:comment': data.summary,
            'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
          })}
        />
      }
      fullWidth
    />
  </ReferenceArrayInput>
);

export const UsersInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source} enableGetChoices={ifTwoLetters} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const AgentsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Agent" source={source} enableGetChoices={ifTwoLetters} filter={filterAllServers}>
    <MultiServerAutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export { default as DateTimeInput } from './DateTimeInput';
export { default as LocationInput } from './LocationInput';
