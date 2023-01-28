import CreateOrImport from '../../../common/CreateOrImport';
import ContributionEdit from './ContributionEdit';
import ContributionList from './ContributionList';
import ContributionShow from './ContributionShow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default {
  config: {
    list: ContributionList,
    show: ContributionShow,
    create: CreateOrImport,
    edit: ContributionEdit,
    icon: ThumbUpIcon,
    options: {
      label: 'Contributions',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['heco:Contribution'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Contribution |||| Contributions',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'heco:contributes': 'A contribué à',
        'heco:contributeTo': 'Contribution pour le compte de',
        'pair:hasTopic': 'A pour thème'
      }
    }
  }
};
