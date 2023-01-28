import React from 'react';
import { DateField, UrlField, TextField } from 'react-admin';
import { MainList, Hero, Show, SeparatedListField, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from "@semapps/geo-components";
import { MarkdownField } from '@semapps/markdown-components';
import ProjectTitle from './ProjectTitle';

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <>
      <Hero image="image">
        <DateField source="published" showTime />
        <DateField source="updated" showTime />
        <ReferenceArrayField reference="Status" source="pair:hasStatus">
          <SeparatedListField linkType={false}>
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <UrlField source="pair:aboutPage" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" addLabel={false} />
        <ReferenceArrayField reference="Person" source="pair:involves">
          <GridList xs={2} linkType="show">
            <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
          </GridList>
        </ReferenceArrayField>
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation']?.['pair:label']}
          latitude={record => record['pair:hasLocation']?.['pair:latitude']}
          longitude={record => record['pair:hasLocation']?.['pair:longitude']}
        />
        {/*<ActivitiesList source="outbox">*/}
        {/*  <AccordionList*/}
        {/*    date={record => record && record.published}*/}
        {/*    title={record => record && record.name}*/}
        {/*    content={NotePreview}*/}
        {/*  />*/}
        {/*</ActivitiesList>*/}
      </MainList>
    </>
  </Show>
);

export default ProjectShow;
