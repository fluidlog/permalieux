import CreateOrImport from '../../../../common/CreateOrImport';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: CreateOrImport,
    edit: OrganizationEdit,
    icon: AccountBalanceIcon,
    options: {
      label: 'Organisations',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Organization'],
    list: {
      servers: '@default',
      forceArray: ['pair:organizationOfMembership']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        image: 'Logo',
        'pair:affiliates': 'A pour membres',
        'pair:partnerOf': 'Partenaire de (Acteurs > Organisations)',
        'pair:involvedIn': 'Impliqué dans (Activités > Evénements)',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:hasTopic': 'A pour thème (Concepts > Thèmes)',
        'pair:documentedBy': 'Documenté par (Documents)',
        'pair:hasLocation': 'Adresse',
        'pair:organizationOfMembership': 'Membres avec Role',
        'pair:membershipActor': 'Membre',
        'pair:membershipRole': 'Role',
        'pair:produces': 'Produit les compétences',
        'pair:aims': 'Recherche les compétences'
      }
    }
  }
};
