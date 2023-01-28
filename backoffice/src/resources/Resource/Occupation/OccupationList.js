import React from 'react';
import SimpleList from "../../../common/list/SimpleList";
import BusinessIcon from '@material-ui/icons/Business';
import List from "../../../layout/list/List";

const OccupationList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <BusinessIcon />} linkType="show" />
  </List>
);

export default OccupationList;
