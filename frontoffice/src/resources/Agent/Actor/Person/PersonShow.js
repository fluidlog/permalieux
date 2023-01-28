import React from 'react';
import { TextField } from 'react-admin';
import { Hero, Show, MainList, SeparatedListField, MasonryList } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from "@semapps/geo-components";
import { MarkdownField } from '@semapps/markdown-components';
import PersonTitle from './PersonTitle';
import ProjectPreview from "../../Activity/Project/ProjectPreview";
import ContactField from "../../../../layout/ContactField";

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props} hasEdit={false}>
    <>
      <Hero image="pair:image">
        <TextField source="pair:firstName" />
        <ReferenceArrayField reference="Theme" source="pair:hasTopic">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <ReferenceArrayField reference="Group" type={{ a: 'pair:Group' }} source="pair:affiliatedBy">
          <SeparatedListField linkType="show">
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <ContactField source="pair:e-mail" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
        <ReferenceArrayField reference="Activity" source="pair:involvedIn">
          <MasonryList
            image={record => record?.image || record?.['pair:hasTopic']?.[0]?.image || record?.['pair:hasTopic']?.[1]?.image}
            content={record => <ProjectPreview record={record} />}
            breakpointCols={{ default: 4, 900: 3, 450: 1 }}
            linkType="show"
          />
        </ReferenceArrayField>
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation']?.['pair:label']}
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
);

export default PersonShow;
