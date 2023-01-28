import React from 'react';
import { TextField, UrlField } from 'react-admin';
import { Hero, MainList, Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import { MapField } from "@semapps/geo-components";
import { MarkdownField } from '@semapps/markdown-components';
import OrganizationTitle from './OrganizationTitle';

const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <>
      <Hero image="image">
        <TextField source="pair:phone" />
        <UrlField source="pair:aboutPage" />
        <UrlField source="pair:webPage" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
        <MapField
          source="pair:hasLocation"
          address={record => record?.['pair:hasLocation']?.['pair:label']}
          latitude={record => record?.['pair:hasLocation']?.['pair:latitude']}
          longitude={record => record?.['pair:hasLocation']?.['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default OrganizationShow;
