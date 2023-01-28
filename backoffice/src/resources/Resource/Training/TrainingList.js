import React from 'react';
import { MultiViewsList } from '@semapps/list-components';
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import ListIcon from '@material-ui/icons/List';
import EventIcon from '@material-ui/icons/Event';
import TrainingFilterSidebar from './TrainingFilterSidebar';
import List from "../../../layout/list/List";
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

const TrainingList = props => (
  <MultiViewsList
    ListComponent={List}
    aside={<TrainingFilterSidebar />}
    views={{
      list: {
        label: 'Liste',
        icon: ListIcon,
        perPage: 1000,
        pagination: false,
        list: (
          <Datagrid rowClick="show">
          <TextField source="pair:label" />
          <ShowButton />
          <EditButton />
        </Datagrid>
        )
      },
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
      }
    }}
    {...props}
  />
);

export default TrainingList;
