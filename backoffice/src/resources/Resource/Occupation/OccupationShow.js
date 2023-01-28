import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { SideList } from '../../../common/list';
import { QuickAppendReferenceArrayField } from '@semapps/field-components';
import { ChipList } from '@semapps/list-components';
import Show from "../../../layout/show/Show";
import OccupationTitle from './OccupationTitle';

const OccupationShow = props => (
  <Show title={<OccupationTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <QuickAppendReferenceArrayField reference="Job" source="heco:offeredByJob">
            <ChipList primaryText="pair:label" linkType="show" externalLinks />
          </QuickAppendReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default OccupationShow;
