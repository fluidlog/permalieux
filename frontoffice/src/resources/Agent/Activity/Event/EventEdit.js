import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import { DateTimeInput } from '@semapps/date-components';
import { PersonsInput, ThemesInput } from '../../../../inputs';
import EventTitle from './EventTitle';
import frLocale from "date-fns/locale/fr";
import PairLocationInput from "../../../../pair/PairLocationInput";

const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:aboutPage" fullWidth />
      <DateTimeInput
        source="pair:startDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <DateTimeInput
        source="pair:endDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <PersonsInput source="pair:involves" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
