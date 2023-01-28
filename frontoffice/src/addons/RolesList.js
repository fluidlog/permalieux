import React from 'react';
import { ListBase } from 'react-admin';
import { makeStyles, Card, Box, Typography } from '@material-ui/core'
import { GridList } from '@semapps/archipelago-layout';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 0,
    padding: 15,
    backgroundColor: theme.palette.grey[100],
    borderRadius: '50%'
  }
}));

const CardList = ({ record }) => {
  const classes = useStyles();
  return(
    <Card className={classes.card} variant="outlined">
      <Box
        display="flex"
        height={55}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" align="center">{record?.['pair:label']}</Typography>
      </Box>
    </Card>
  );
}

const RolesList = () => (
  <ListBase resource="Group" basePath="/Group" filter={{ 'pair:partOf': process.env.REACT_APP_LOCAL_GROUP_URL, 'pair:hasType': process.env.REACT_APP_MIDDLEWARE_URL + 'types/role' }}>
    <GridList xs={6} linkType="show">
      <CardList />
    </GridList>
  </ListBase>
);

export default RolesList;
