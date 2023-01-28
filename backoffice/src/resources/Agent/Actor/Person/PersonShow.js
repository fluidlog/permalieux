import React from 'react';
import { TextField, ArrayField } from 'react-admin';
import { Box, Grid } from '@material-ui/core';
import { QuickAppendReferenceArrayField, ReferenceArrayField, AvatarWithLabelField, ReferenceField } from '@semapps/field-components';
import { ChipList, GridList } from '@semapps/list-components';
import { GroupedReferenceHandler } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import { Hero, MainList, SideList } from '../../../../common/list';
import RightLabel from "../../../../common/list/SideList/RightLabel";
import Show from "../../../../layout/show/Show";
import TimelineList from '../../../../common/list/TimelineList';

const ConditionalSourceDefinedHandler = ({ record, source, children, ...otherProps }) => {
  if (record?.[source] && (!Array.isArray(record[source]) || record[source].length > 0)) {
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, { ...otherProps, record, source });
    });
  } else {
    return <></>;
  }
};

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="image">
          <TextField source="pair:firstName" />
          <TextField source="pair:lastName" />
          <TextField source="pair:comment" />
          <ReferenceArrayField
            label="Postes"
            reference="Job"
            source="heco:holds"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <TimelineList />
          </ReferenceArrayField>
          <ReferenceArrayField
            label="Formations"
            reference="Training"
            source="heco:attends"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <TimelineList />
          </ReferenceArrayField>
          <ReferenceArrayField
            label="Contributions"
            reference="Contribution"
            source="heco:contributes"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <TimelineList />
          </ReferenceArrayField>
        </Hero>
        <MainList>
          <MapField
            source="pair:hasLocation"
            address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <GroupedReferenceHandler
            source="pair:actorOfMembership"
            groupReference="MembershipRole"
            groupLabel="pair:label"
            filterProperty="pair:membershipRole"
            addLabel={false}
          >
            <ConditionalSourceDefinedHandler>
              <RightLabel mb={0} />
              <ArrayField source="pair:actorOfMembership" >
                <Box mb={4}>
                  <GridList xs={6} linkType="show" externalLinks>
                    <ReferenceField reference="Organization" source="pair:membershipOrganization" link="show" basePath="/Organization">
                      <AvatarWithLabelField label="pair:label" image="image"/>
                    </ReferenceField>
                  </GridList>
                </Box>
              </ArrayField>
            </ConditionalSourceDefinedHandler>
          </GroupedReferenceHandler>
          <QuickAppendReferenceArrayField reference="Theme" source="pair:hasTopic">
            <ChipList primaryText="pair:label" linkType="show" externalLinks />
          </QuickAppendReferenceArrayField>
          <GroupedReferenceHandler
            source="heco:qualityOfCompetence"
            groupReference="Skill"
            groupLabel="pair:label"
            filterProperty="heco:hasCompetenceTerm"
            addLabel={false}
          >
            <ConditionalSourceDefinedHandler>
              <RightLabel mb={0} />
              <ArrayField source="heco:qualityOfCompetence">
                <Box mb={4}>
                  <GridList xs={6} linkType={false} externalLinks>
                    <ReferenceField reference="Person" source="heco:competenceOf" link="show" basePath="/Person">
                      <ChipList primaryText="pair:label" linkType="show" externalLinks />
                    </ReferenceField>
                  </GridList>
                </Box>
              </ArrayField>
            </ConditionalSourceDefinedHandler>
          </GroupedReferenceHandler>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PersonShow;
