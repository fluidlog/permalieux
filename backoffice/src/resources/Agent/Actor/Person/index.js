import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
    show: PersonShow,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Person'],
    list: {
      servers: '@default',
      forceArray: ['pair:actorOfMembership','heco:hasCompetence','heco:qualityOfCompetence']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
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
        'pair:aims': 'Recherche les compétences',
        'pair:membershipActor': 'Membre',
        'heco:holds': 'A travaillé comme',
        'heco:attends': 'A suivi les formations',
        'heco:contributes': 'A contribué à'
      }
    }
  }
};
