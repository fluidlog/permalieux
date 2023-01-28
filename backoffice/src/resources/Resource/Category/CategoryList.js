import React from 'react';
import SimpleList from "../../../common/list/SimpleList";
import CategoryIcon from '@material-ui/icons/Category';
import List from "../../../layout/list/List";

const CategoryList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <CategoryIcon />} linkType="show" />
  </List>
);

export default CategoryList;
