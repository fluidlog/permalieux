import React from 'react';
import { List } from 'react-admin';
import { MasonryList, LargeLabel } from '@semapps/archipelago-layout';
import ProjectPreview from "./ProjectPreview";
import ProjectFilterSidebar from "./ProjectFilterSidebar";
import GroupedList from "../../../../pair/GroupedList";

const ProjectList = props => (
  <List title="Frise des actions" aside={<ProjectFilterSidebar />} filter={{ 'pair:supportedBy': process.env.REACT_APP_LOCAL_GROUP_URL }} perPage={500} pagination={false} sort={{ field: 'published', order: 'ASC' }} {...props}>
    <GroupedList
      groupBy="pair:hasStatus"
      selectGroups={{
        [process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-cours']: 'Actions en cours',
        [process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-reflexion']: 'Actions en réflexion',
        [process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-sommeil']: 'Actions en sommeil'
      }}
      header={(_, groupLabel) => <LargeLabel>{groupLabel}</LargeLabel>}
      content={
        <MasonryList
          image={record => record.image}
          content={record => <ProjectPreview record={record} />}
          linkType="show"
        />
      }
    />
  </List>
);

export default ProjectList;
