import React from 'react';
import { ListBase } from 'react-admin';
import { GridList, AvatarField } from '@semapps/archipelago-layout';

export const GroupMembers = ({ groupSlug }) => (
  <ListBase resource="Person" basePath="/Person" filter={{ 'pair:affiliatedBy': process.env.REACT_APP_LOCAL_GROUP_CODS + 'groups/' + groupSlug }} sort={{ field: 'pair:label', order: 'ASC' }}>
    <GridList xs={2} linkType="show">
      <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
    </GridList>
  </ListBase>
);

export default GroupMembers;
