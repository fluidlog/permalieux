import React from 'react';
import { Show } from 'react-admin';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import RedirectByType from "../../common/RedirectByType";


const ResourceRedirect = props => (
  <Show {...props}>
    <RedirectByType typesMap={{ Skill: 'pair:Skill' }} />
  </Show>
);

export default {
  config: {
    show: ResourceRedirect,
    icon: HowToRegIcon,
    options: {
      label: 'Compétences'
    }
  },
  dataModel: {
    types: ['pair:Skill', 'heco:Quality', 'heco:Occupation', 'heco:Job', 'heco:Training', 'heco:Contribution'],
    list: {
      servers: '@default',
    }
  },
  translations: {
    fr: {
      name: 'Compétence |||| Compétences'
    }
  }
};
