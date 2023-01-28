import React from 'react';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SimpleList from "../../../common/list/SimpleList";
import List from "../../../layout/list/List";

const SkillList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <PlaylistAddCheckIcon />} linkType="show" />
  </List>
);

export default SkillList;
