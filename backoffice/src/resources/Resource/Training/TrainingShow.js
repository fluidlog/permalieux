import React from 'react';
import { TextField, UrlField, DateField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarWithLabelField, QuickAppendReferenceArrayField, ReferenceArrayField } from '@semapps/field-components';
import { GridList, ChipList } from '@semapps/list-components';
import { MarkdownField } from '../../../common/field';
import { Hero, MainList, SideList } from '../../../common/list';
import TrainingTitle from './TrainingTitle';
import Show from "../../../layout/show/Show";

const TrainingShow = props => (
  <Show title={<TrainingTitle />} {...props}>
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
          <ReferenceArrayField reference="Actor" source="heco:providedBy" sort={{ field: 'type', order: 'ASC' }}>
            <GridList xs={6} linkType="show" externalLinks>
              <AvatarWithLabelField label="pair:label" image="image" />
            </GridList>
          </ReferenceArrayField>
          <QuickAppendReferenceArrayField reference="Occupation" source="heco:hasOccupation">
            <ChipList primaryText="pair:label" linkType="show" externalLinks />
          </QuickAppendReferenceArrayField>
          <QuickAppendReferenceArrayField reference="Theme" source="pair:hasTopic">
            <ChipList primaryText="pair:label" linkType="show" externalLinks />
          </QuickAppendReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default TrainingShow;
