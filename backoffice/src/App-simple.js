import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostCreate } from './posts';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    // options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('https://jsonplaceholder.typicode.com', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;
