import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Show, InverseReferenceShowLayout, ListTab, GridList, AvatarField, MasonryList } from '@semapps/archipelago-layout';
import { MapList } from "@semapps/geo-components";
import ThemeTitle from './ThemeTitle';
import ProjectPreview from "../../Agent/Activity/Project/ProjectPreview";

const useStyles = makeStyles(() => ({
  card: {
    padding: 0
  }
}));

const ThemeShow = props => {
  const classes = useStyles();
  return (
    <Show title={<ThemeTitle />} classes={{ card: classes.card }} {...props}>
      <InverseReferenceShowLayout>
        <ListTab
          label="Actions"
          resource="Project"
          basePath="/Project"
          inversePredicate="pair:hasTopic"
          filter={{ 'pair:supportedBy': process.env.REACT_APP_LOCAL_GROUP_URL }}
        >
          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <ProjectPreview record={record} />}
            breakpointCols={{ default: 4, 900: 3, 450: 1 }}
            linkType="show"
          />
        </ListTab>
        <ListTab
          resource="Person"
          basePath="/Person"
          inversePredicate="pair:hasTopic"
        >
          <GridList xs={2} linkType="show">
            <AvatarField label="pair:label" image="pair:image" labelColor="#afc544" />
          </GridList>
        </ListTab>
        <ListTab
          label="Acteurs locaux"
          resource="Organization"
          basePath="/Organization"
          inversePredicate="pair:hasTopic"
        >
          <MapList
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude'] }
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude'] }
            label={record => record['pair:label']}
            description={record => record['pair:description']}
            center={[49.2839, 2.5955]}
            zoom={11}
            scrollWheelZoom
          />
        </ListTab>
        <ListTab
          label="Projets La Fabrique"
          resource="Project"
          basePath="/Project"
          inversePredicate="pair:hasTopic"
          filter={{ 'pair:supportedBy': process.env.REACT_APP_MIDDLEWARE_URL + 'services/lafabrique' }}
        >
          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <ProjectPreview record={record} />}
            breakpointCols={{ default: 4, 900: 3, 450: 1 }}
            linkType="show"
          />
        </ListTab>
      </InverseReferenceShowLayout>
    </Show>
  );
}

export default ThemeShow;
