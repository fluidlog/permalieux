import React from 'react';
import { TextField, UrlField, DateField } from 'react-admin';
import { Hero, Show, MainList, SeparatedListField, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';
import EventTitle from './EventTitle';

const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <>
      <Hero>
        <TextField source="pair:comment" />
        <DateField source="pair:startDate" showTime />
        <DateField source="pair:endDate" showTime />
        <UrlField source="pair:aboutPage" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
        <ReferenceArrayField reference="Person" source="pair:involves">
          <GridList xs={2} linkType="show">
            <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
          </GridList>
        </ReferenceArrayField>
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default EventShow;
