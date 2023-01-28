import React from 'react';
import { List, GridList, AvatarField } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";

const PersonList = props => (
  <List title="Trombinoscope" aside={<PersonFilterSidebar />} sort={{ field: 'as:name', order: 'DESC' }} perPage={100} pagination={false} {...props} hasCreate={false}>
    <GridList xs={3} linkType="show">
      <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" fallback="/logo512.png" />
    </GridList>
  </List>
);

export default PersonList;
