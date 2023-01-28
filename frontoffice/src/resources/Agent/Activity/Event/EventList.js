import React from 'react';
import { CalendarList, DaysList } from '@semapps/date-components';
import { MultiViewsList } from '@semapps/archipelago-layout';
import frLocale from '@fullcalendar/core/locales/fr';
import EventIcon from '@material-ui/icons/Event';
import ListIcon from '@material-ui/icons/List';

const EventList = props => (
  <MultiViewsList
    title="Agenda partagé"
    views={{
      calendar: {
        label: 'Calendrier',
        icon: EventIcon,
        perPage: 1000,
        pagination: false,
        list: (
          <CalendarList
            locale={frLocale}
            label="pair:label"
            startDate="pair:startDate"
            endDate="pair:endDate"
            linkType="show"
          />
        )
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        perPage: 1000,
        pagination: false,
        list: (
          <DaysList
            locale={frLocale}
            label="pair:label"
            startDate="pair:startDate"
            endDate="pair:endDate"
            linkType="show"
          />
        )
      }
    }}
    {...props}
  />
);

export default EventList;
