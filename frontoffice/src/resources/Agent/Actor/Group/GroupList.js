import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const GroupList = props => (
  <List perPage={500} pagination={false} {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <LocalOfferIcon />} linkType="show" />
  </List>
);

export default GroupList;
