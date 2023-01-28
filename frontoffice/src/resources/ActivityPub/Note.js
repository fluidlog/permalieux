export default {
  dataModel: {
    types: ['as:Note'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'notes',
    slugField: 'name'
  },
  translations: {
    fr: {
      name: 'Actualité |||| Actualités',
      fields: {
        content: 'Message',
        attributedTo: 'Auteur'
      }
    }
  }
};
