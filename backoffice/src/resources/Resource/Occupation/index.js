// import { PairResourceCreate } from '../../../pair';
import OccupationCreate from './OccupationCreate';
import OccupationEdit from './OccupationEdit';
import OccupationList from './OccupationList';
import OccupationShow from './OccupationShow';
import BusinessIcon from '@material-ui/icons/Business';

export default {
  config: {
    list: OccupationList,
    create: OccupationCreate,
    edit: OccupationEdit,
    show: OccupationShow,
    icon: BusinessIcon,
    options: {
      label: 'Professions',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['heco:Occupation'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Profession |||| Professions',
      fields: {
        'pair:label': 'Libellé de la profession',
        'heco:offeredByJob': 'Offert par'
      }
    }
  }
};
