import SettingsIcon from '@material-ui/icons/Settings';

export default {
  config: {
    icon: SettingsIcon,
    options: {
      label: 'Config'
    }
  },
  dataModel: {
    types: ['pair:Theme'],
    list: {
      servers: '@default',
    }
  },
  translations: {
    fr: {
      name: 'Config |||| Configs'
    }
  }
};
