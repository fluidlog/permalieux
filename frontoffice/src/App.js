import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { LogoutButton } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import Layout from './layout/Layout';
import theme from './layout/theme';
import LoginPage from './layout/LoginPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SemAppsPage from "./pages/SemAppsPage";

const history = createBrowserHistory();

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    theme={theme}
    history={history}
    loginPage={LoginPage}
    logoutButton={LogoutButton}
    dashboard={HomePage}
    customRoutes={[
      <Route exact path="/QuiSommesNous" component={AboutPage} />,
      <Route exact path="/SemApps" component={SemAppsPage} />,
      <Route exact path="/Contact" component={ContactPage} />,
    ]}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;
