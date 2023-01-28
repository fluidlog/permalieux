import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField, DateField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { Hero, GridList, MainList, SideList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import EventTitle from './EventTitle';

const EventShow = props => (
  <ShowWithPermissions title={<EventTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
          <DateField source="pair:startDate" showTime />
          <DateField source="pair:endDate" showTime />
          <UrlField source="pair:aboutPage" />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Actor" source="pair:involves" sort={{ field: 'type', order: 'ASC' }}>
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="image" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </ShowWithPermissions>
);

export default EventShow;
