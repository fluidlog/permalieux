import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { Hero, GridList, MainList, SideList, AvatarField, SeparatedListField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MarkdownField } from '@semapps/markdown-components';
import IdeaTitle from './IdeaTitle';

const IdeaShow = props => (
  <ShowWithPermissions title={<IdeaTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="image">
          <TextField label="Courte description" source="pair:comment" />
          <ReferenceArrayField reference="Actor" source="pair:brainstormedBy">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Status" source="pair:hasStatus">
            <SeparatedListField linkType={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Type" source="pair:hasType">
            <SeparatedListField linkType={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Activity" source="pair:concretizedBy" sort={{ field: 'type', order: 'ASC' }}>
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="image" />
            </GridList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </ShowWithPermissions>
);

export default IdeaShow;
