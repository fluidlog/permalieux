import React from 'react';
import { useShowController, ShowContextProvider } from 'react-admin';
import PageShow from "../resources/Page/PageShow";

const HomePage = () => {
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_LOCAL_GROUP_CODS + 'pages/bienvenue',
    resource: 'Page'
  };

  return(
    <ShowContextProvider value={useShowController(config)}>
      <PageShow {...config} />
    </ShowContextProvider>
  );
};

export default HomePage;
