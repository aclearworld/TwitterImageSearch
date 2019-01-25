import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    gridImg: {
        width: 800,
        height: 400,
        // objectFit: 'cover',
    }
});

const ImageList = ({UrlSchemas, classes}) => {
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={400} cols={4}>
                {UrlSchemas.map(urlSchema => (
                    <GridListTile key={urlSchema.url} cols={1}>
                        <img className={classes.gridImg} src={urlSchema.url} alt="" />
                        <GridListTileBar
                            title={urlSchema.text}
                            subtitle={urlSchema.url} />
                    </GridListTile>
                ))}
            </GridList>
        </div>);
    // <ul className="list">{list}</ul>;
};

export default withStyles(styles)(ImageList);