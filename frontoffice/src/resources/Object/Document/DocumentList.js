import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import DescriptionIcon from '@material-ui/icons/Description';

const DocumentList = props => (
  <List title="Médiathèque / Ressources" {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="show" />
  </List>
);

export default DocumentList;
