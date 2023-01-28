import LanguageIcon from '@material-ui/icons/Language';

export default {
  config: {
    icon: LanguageIcon,
    options: {
      label: 'Statuts'
    }
  },
  dataModel: {
    types: ['pair:ProjectStatus'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'status',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Statuts |||| Statut',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
