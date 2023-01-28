const dataServers = {
  msh: {
    name: 'MSH Val de Loire',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      msh: {
        'pair:Organization': ['/organizations'],
        'pair:MembershipAssociation': ['/membership-associations'],
        'pair:MembershipRole': ['/membership-roles'],
        'pair:Group': ['/groups'],
        'pair:Project': ['/projects'],
        'pair:Event': ['/events'],
        'pair:Task': ['/tasks'],
        'pair:Person': ['/users'],
        'pair:Idea': ['/ideas'],
        'pair:Theme': ['/themes'],
        'pair:Skill': ['/skills'],
        'pair:Document': ['/documents'],
        'pair:Status': ['/status'],
        'pair:Type': ['/types'],
        'as:Note': ['/notes'],
        'semapps:Page': ['/pages']
      }
    },
    uploadsContainer: '/files'
  },
  masa: {
    name: 'Consortium Huma-Num MASA',
    baseUrl: 'https://data.carto4ch.huma-num.fr/',
    sparqlEndpoint: 'https://data.carto4ch.huma-num.fr/sparql',
    containers: {
      masa: {
        'pair:Organization': ['/organizations'],
        'pair:MembershipAssociation': ['/membership-associations'],
        'pair:MembershipRole': ['/membership-roles'],
        'pair:Group': ['/groups'],
        'pair:Project': ['/projects'],
        'pair:Event': ['/events'],
        'pair:Task': ['/tasks'],
        'pair:Person': ['/users'],
        'pair:Idea': ['/ideas'],
        'pair:Theme': ['/themes'],
        'pair:Skill': ['/skills'],
        'pair:Document': ['/documents'],
        'pair:Status': ['/status'],
        'pair:Type': ['/types'],
        'as:Note': ['/notes'],
        'semapps:Page': ['/pages']
      }
    }
  }
};

export default dataServers;
