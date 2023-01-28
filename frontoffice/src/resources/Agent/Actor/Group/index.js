import PairResourceCreate from '../../../../pair/PairResourceCreate';
import GroupEdit from './GroupEdit';
import GroupList from './GroupList';
import GroupShow from './GroupShow';
import GroupIcon from '@material-ui/icons/Group';

export default {
  config: {
    list: GroupList,
    show: GroupShow,
    create: PairResourceCreate,
    edit: GroupEdit,
    icon: GroupIcon,
    options: {
      label: 'Groupes'
    }
  },
  dataModel: {
    types: ['pair:Group'],
    containerUri: process.env.REACT_APP_LOCAL_GROUP_CODS + 'groups',
    filter: {
      'pair:partOf': process.env.REACT_APP_LOCAL_GROUP_URL
    },
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Groupe |||| Groupes',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Page Près de chez nous',
        'pair:webPage': 'Site web',
        image: 'Logo',
        'pair:hasLocation': 'Adresse',
        'pair:affiliates': 'Membres',
        'pair:partnerOf': 'Partenaires',
        'pair:involvedIn': 'Participe à',
        'pair:hasTopic': 'Thèmes',
        'pair:documentedBy': 'Documents'
      }
    }
  }
};
