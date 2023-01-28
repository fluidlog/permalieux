import React from 'react';
import { makeStyles } from "@material-ui/core";
import { AvatarField, GridList, MainList, Show } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import { MarkdownField } from '@semapps/markdown-components';
import GroupTitle from './GroupTitle';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0
  }
}));

const GroupShow = props => {
  const classes = useStyles();
  return (
    <Show title={<GroupTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <MarkdownField source="pair:description" addLabel={false} />
        <ReferenceArrayField label="Contributeurs" reference="Person" source="pair:affiliates">
          <GridList xs={2} linkType="show">
            <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
          </GridList>
        </ReferenceArrayField>
      </MainList>
    </Show>
  );
}

export default GroupShow;
