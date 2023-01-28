import React from 'react';
import { Avatar } from '@material-ui/core';
import { MultiViewsList } from '@semapps/list-components';
import { AvatarWithLabelField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import { MapList } from '@semapps/geo-components';
import { ListWithPermissions } from '@semapps/auth-provider';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import HumanIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HumanFilterSidebar from './HumanFilterSidebar';
import SimpleList from "../../../../common/list/SimpleList";

const HumanList = props => (
  <MultiViewsList
    ListComponent={ListWithPermissions}
    aside={<HumanFilterSidebar />}
    views={{
      avatar: {
        label: 'Trombinoscope',
        icon: AccountCircleIcon,
        sort: { field: 'pair:lastName', order: 'DESC' },
        perPage: 500,
        pagination: false,
        list: (
          <GridList xs={2} linkType="show" externalLinks>
            <AvatarWithLabelField label="pair:label" image="image" />
          </GridList>
        )
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:lastName', order: 'DESC' },
        perPage: 25,
        list: (
          <SimpleList
            primaryText={record => record['pair:label']}
            secondaryText={record => record['pair:comment']}
            leftAvatar={record => (
              <Avatar src={record['image']} width="100%">
                <HumanIcon />
              </Avatar>
            )}
            linkType="show"
          />
        )
      },
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={record => record?.['pair:hasLocation']?.['pair:latitude']}
            longitude={record => record?.['pair:hasLocation']?.['pair:longitude']}
            label={record => record['pair:label']}
            description={record => record['pair:comment']}
            scrollWheelZoom
          />
        )
      }
    }}
    {...props}
  />
);

export default HumanList;
