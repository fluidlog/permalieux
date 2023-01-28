import React from 'react';
import { ListBase } from 'react-admin';
import { makeStyles, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import { GridList } from '@semapps/archipelago-layout';
import ServicePreview from "../resources/Agent/Actor/Service/ServicePreview";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    margin: 15,
    paddingTop: '25%'
  },
  link: {
    textDecoration: 'none'
  }
}));

const CardList = ({ record }) => {
  const classes = useStyles();
  return(
    <Card className={classes.card} variant="outlined">
      <a href={record['pair:webPage']} target="_blank" rel="noopener noreferrer" className={classes.link}>
        <CardActionArea>
          <CardMedia image={record.image} className={classes.media} />
          <CardContent>
            <ServicePreview record={record} />
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

const ColibrisServices = () => (
  <ListBase resource="Service" basePath="/Service">
    <GridList xs={3} linkType={false}>
      <CardList />
    </GridList>
  </ListBase>
);

export default ColibrisServices;
