//import { PairResourceCreate } from '../../../pair';
import CategoryCreate from './CategoryCreate';
import CategoryEdit from './CategoryEdit';
import CategoryList from './CategoryList';
import CategoryShow from './CategoryShow';
import CategoryIcon from '@material-ui/icons/Category';

export default {
  config: {
    list: CategoryList,
    show: CategoryShow,
    create: CategoryCreate,
    edit: CategoryEdit,
    icon: CategoryIcon,
    options: {
      label: 'Qualités',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['pair:Category'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Qualities |||| Qualités',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:categorizedBy': 'Catérorisé par > Agent'
      }
    }
  }
};
