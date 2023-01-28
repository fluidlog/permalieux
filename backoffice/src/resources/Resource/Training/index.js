import CreateOrImport from '../../../common/CreateOrImport';
import TrainingEdit from './TrainingEdit';
import TrainingList from './TrainingList';
import TrainingShow from './TrainingShow';
import SchoolIcon from '@material-ui/icons/School';

export default {
  config: {
    list: TrainingList,
    show: TrainingShow,
    create: CreateOrImport,
    edit: TrainingEdit,
    icon: SchoolIcon,
    options: {
      label: 'Formations',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['heco:Training'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Formation |||| Formations',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'heco:attends': 'A pour formation',
        'heco:providedBy': 'Formé par',
        'heco:hasTraining': 'A pour formation',
        'pair:hasTopic': 'A pour thème',
        'heco:hasType': 'A pour type'
      }
    }
  }
};
