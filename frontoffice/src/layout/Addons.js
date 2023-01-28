import React from 'react';
import { useShowContext } from 'react-admin';
import availableAddons from '../addons';

const Addons = () => {
  const { basePath, loaded, record, resource } = useShowContext();

  if( !loaded ) return null;
  const path = (new URL(record.id || record['@id'])).pathname;

  if( availableAddons[path] ) {
    return availableAddons[path].map(addon => React.createElement(addon, { record, resource, basePath }));
  } else {
    return null;
  }
}

export default Addons;
