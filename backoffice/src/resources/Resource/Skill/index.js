import { PairResourceCreate } from '../../../pair';
import SkillEdit from './SkillEdit';
import SkillList from './SkillList';
import SkillShow from './SkillShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: SkillList,
    create: PairResourceCreate,
    edit: SkillEdit,
    show: SkillShow,
    icon: PersonIcon,
    options: {
      label: 'Compétences',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['pair:Skill'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Compétence |||| Compétences',
      fields: {
        'pair:label': 'Titre',
        'pair:offeredBy': 'Proposé par',
        'pair:neededBy': 'Requis par'
      }
    }
  }
};
