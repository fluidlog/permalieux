import CreateOrImport from '../../../common/CreateOrImport';
import JobEdit from './JobEdit';
import JobList from './JobList';
import JobShow from './JobShow';
import WorkIcon from '@material-ui/icons/Work';

export default {
  config: {
    list: JobList,
    show: JobShow,
    create: CreateOrImport,
    edit: JobEdit,
    icon: WorkIcon,
    options: {
      label: 'Postes',
      parent: 'Resource'
    }
  },
  dataModel: {
    types: ['heco:Job'],
    list: {
      servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Poste |||| Postes',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'heco:holds': 'A pour travail',
        'heco:heldAt': 'Travaille pour',
        'heco:hasOccupation': 'A pour profession',
        'pair:hasTopic': 'A pour thème',
        'heco:hasType': 'A pour type'
      }
    }
  }
};
