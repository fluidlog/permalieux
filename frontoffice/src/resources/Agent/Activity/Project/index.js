import ProjectCreate from "./ProjectCreate";
import ProjectEdit from './ProjectEdit';
import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';
import SettingsIcon from '@material-ui/icons/Settings';

export default {
  config: {
    list: ProjectList,
    show: ProjectShow,
    create: ProjectCreate,
    edit: ProjectEdit,
    icon: SettingsIcon,
    options: {
      label: 'Projets'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_LOCAL_GROUP_CODS + 'projects',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Projet |||| Projets',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        'pair:aboutPage': 'Site web',
        'pair:involves': 'Implique',
        'pair:documentedBy': 'Documenté par',
        'pair:hasTopic': 'A pour thème',
        'pair:hasStatus': 'Statut',
        'pair:hasLocation': 'Adresse',
        published: 'Publié',
        updated: 'Mis à jour',
        outbox: 'Actualités'
      }
    }
  }
};
