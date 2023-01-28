import LanguageIcon from '@material-ui/icons/Language';

export default {
  config: {
    icon: LanguageIcon,
    options: {
      label: 'Types'
    }
  },
  dataModel: {
    types: [
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Types |||| Type',
      fields: {
        'pair:label': 'Nom'
      }
    }
  }
};
