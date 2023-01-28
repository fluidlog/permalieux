import React from 'react';
import { Link, useQueryWithStore } from 'react-admin';
import { GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tile: {
    backgroundColor: 'lightgrey',
  },
  backgroundImage: {
    left: '50%',
    height: '100%',
    position: 'relative',
    transform: 'translateX(-50%)'
  }
}))

const tileData = [
  {
    slug: 'democratie',
    cols: 3
   },
   {
     slug: 'agriculture',
     title: 'Agriculture & Alimentation',
     cols: 3
   },
   {
     slug: 'culture',
     title: 'Culture & Social',
     cols: 2
   },
   {
     slug: 'economie',
     cols: 2
   },
   {
     slug: 'education',
     cols: 3
   },
   {
     slug: 'habitat',
     title: 'Habitat & Energie',
     cols: 3
   }
];

export const ThemesMosaic = () => {
  const classes = useStyles();

  const { data, loading } = useQueryWithStore({
    type: 'getMany',
    resource: 'Theme',
    payload: { ids: tileData.map(tile => process.env.REACT_APP_MIDDLEWARE_URL + 'themes/' + tile.slug) }
  });

  if( loading ) {
    return(
      <GridList cellHeight={240} cols={8}>
        {tileData.map((tile, i) =>
          <GridListTile key={i} cols={tile.cols} className={classes.tile}>
            <GridListTileBar title={tile.title} />
          </GridListTile>
        )}
      </GridList>
    )
  } else {
    return (
      <GridList cellHeight={240} cols={8}>
        {tileData.map((tile, i) =>
          <GridListTile key={i} cols={tile.cols}>
            <Link to={'/Theme/' + encodeURIComponent(data[i].id) + '/show'}>
              <img src={data[i].image} alt={tile.title || data[i]['pair:label']} className={classes.backgroundImage} />
              <GridListTileBar title={tile.title || data[i]['pair:label']} />
            </Link>
          </GridListTile>
        )}
      </GridList>
    );
  }
}

export default ThemesMosaic;
