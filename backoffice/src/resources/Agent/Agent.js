import React from 'react';
import { Show } from 'react-admin';
import RedirectByType from "../../common/RedirectByType";

const AgentRedirect = props => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Person: 'pair:Person',
        Human: 'pair:Human',
        Organization: 'pair:Organization',
        Event: 'pair:Event',
        Project: 'pair:Project'
      }}
    />
  </Show>
);

export default {
  config: {
    show: AgentRedirect
  },
  dataModel: {
    types: ['pair:Project', 'pair:Organization', 'pair:Person', 'pair:Human', 'pair:Group', 'pair:Event'],
    list: {
      servers: '@default',
    }
  }
};
