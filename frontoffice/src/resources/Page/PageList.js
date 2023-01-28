import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import DescriptionIcon from '@material-ui/icons/Description';

const PageList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="show" />
  </List>
);

export default PageList;
