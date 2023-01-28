import React from 'react';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Show } from 'react-admin';
import RedirectByType from "../../../common/RedirectByType";

const ActorRedirect = props => (
  <Show {...props}>
    <RedirectByType typesMap={{ Person: 'pair:Person', Organization: 'pair:Organization' }} />
  </Show>
);

export default {
  config: {
    show: ActorRedirect,
    icon: SupervisedUserCircleRoundedIcon,
    options: {
      label: 'Acteurs'
    }
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Person', 'pair:Human', 'pair:Group'],
    list: {
      servers: '@default',
    }
  },
  translations: {
    fr: {
      name: 'Acteur |||| Acteurs'
    }
  }
};
