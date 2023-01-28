import React from 'react';
import { ListBase } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import ProjectPreview from "../resources/Agent/Activity/Project/ProjectPreview";

const FeaturedProjects = () => (
  <ListBase resource="Project" basePath="/Project" perPage={4} filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-vedette' }} sort={{ field: 'published', order: 'ASC' }}>
    <MasonryList
      image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
      content={record => <ProjectPreview record={record} />}
      breakpointCols={{ default: 4, 1200: 3, 1000: 2, 700: 1 }}
      linkType="show"
    />
  </ListBase>
);

export default FeaturedProjects;
