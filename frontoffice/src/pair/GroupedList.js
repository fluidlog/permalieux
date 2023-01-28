import React, { useMemo } from 'react';
import { useListContext, ListContextProvider } from 'react-admin';
import { Box } from '@material-ui/core';

const GroupedList = ({ groupBy, selectGroups, header, content }) => {
  const { ids, data, ...rest } = useListContext();

  const groups = useMemo(() => {
    if (data) {
      return Object.fromEntries(Object.entries(selectGroups).map(([groupUri]) =>
        ([groupUri, Object.fromEntries(Object.entries(data).filter(([_, record]) =>
           Array.isArray(record[groupBy]) ? record[groupBy].includes(groupUri) : record[groupBy] === groupUri
        ))])
      ));
    } else {
      return {};
    }
  }, [data, groupBy, selectGroups]);

  return (
    Object.entries(groups).map(([groupUri, groupData], i) => (
      <Box key={groupUri} mt={i === 0 ? -4 : 4}>
        {header(groupUri, selectGroups[groupUri])}
        <ListContextProvider value={{ ids: Object.keys(groupData), data: groupData, ...rest }}>
          {content}
        </ListContextProvider>
      </Box>
    ))
  );
};

export default GroupedList;
