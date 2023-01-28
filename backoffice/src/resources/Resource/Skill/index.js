import SkillCreate from './SkillCreate';
import SkillEdit from './SkillEdit';
import SkillList from './SkillList';
import SkillShow from './SkillShow';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

export default {
  config: {
    list: SkillList,
    create: SkillCreate,
    edit: SkillEdit,
    show: SkillShow,
    icon: PlaylistAddCheckIcon,
    options: {
      label: 'Termes',
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
      name: 'Terme |||| Termes',
      fields: {
        'pair:label': 'Titre',
        'pair:offeredBy': 'Proposé par',
        'pair:neededBy': 'Requis par'
      }
    }
  }
};
