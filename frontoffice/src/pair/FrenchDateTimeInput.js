import React from 'react';
import frLocale from 'date-fns/locale/fr';
import { DateTimeInput } from '@semapps/date-components';

const FrenchDateTimeInput = props => (
  <DateTimeInput
    options={{
      format: 'dd/MM/yyyy à HH:mm',
      ampm: false
    }}
    providerOptions={{
      locale: frLocale
    }}
    {...props}
  />
);

export default FrenchDateTimeInput;
