import PairResourceCreate from '../../../../pair/PairResourceCreate';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: PairResourceCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    containerUri: process.env.REACT_APP_LOCAL_GROUP_CODS + 'events',
    slugField: 'pair:label',
    dereference: ['pair:hasLocation/pair:hasPlace']
  },
  translations: {
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:aboutPage': 'Site web',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:hasLocation': 'Adresse',
        'pair:involves': 'Participants',
        'pair:hasTopic': 'Thèmes'
      }
    }
  }
};
