import DocumentCreate from './DocumentCreate';
import DocumentEdit from './DocumentEdit';
import DocumentList from './DocumentList';
import DocumentShow from './DocumentShow';
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    create: DocumentCreate,
    edit: DocumentEdit,
    icon: DescriptionIcon,
    options: {
      label: 'Documents'
    }
  },
  dataModel: {
    types: ['pair:Document'],
    containerUri: process.env.REACT_APP_LOCAL_GROUP_CODS + 'documents',
    slugField: 'pair:label',
    filter: {
      'pair:documents': process.env.REACT_APP_LOCAL_GROUP_URL
    }
  },
  translations: {
    fr: {
      name: 'Document |||| Documents',
      fields: {
        'pair:label': 'Titre',
        'pair:hasType': 'Type',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:containedIn': 'Dossier',
        'pair:references': 'Référence',
        'pair:referencedBy': 'Référencé par',
        'pair:documents': 'Sujets'
      }
    }
  }
};
