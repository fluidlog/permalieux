import CreateOrImport from '../../../../common/CreateOrImport';
import HumanEdit from './HumanEdit';
import HumanList from './HumanList';
import HumanShow from './HumanShow';
import HumanIcon from '@material-ui/icons/People';

export default {
  config: {
    list: HumanList,
    show: HumanShow,
    create: CreateOrImport,
    edit: HumanEdit,
    icon: HumanIcon,
    options: {
      label: 'Humain',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Human'],
    list: {
      servers: '@default',
      forceArray: ['pair:actorOfMembership']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Humain |||| Humains',
      fields: {
        'pair:firstName': 'Prénom',
        'pair:lastName': 'Nom de famille',
        'pair:comment': 'En deux mots',
        image: 'Photo',
        'pair:involvedIn': 'Impliqué dans',
        'pair:affiliatedBy': 'Membre de',
        'pair:offers': 'A pour compétences',
        'pair:hasTopic': 'A pour intérêt',
        'pair:hasLocation': 'Adresse',
        'pair:aims': 'Recherche les compétences'
      }
    }
  }
};
