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
        width: 300,
        height: 300,
        objectFit: 'cover',
    }
});

const ImageList = ({urlList, classes}) => {
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={160} cols={5}>
                {urlList.map(url => (
                    <GridListTile key={url} cols={1}>
                        <img className={classes.gridImg} src={url} alt="" />
                        <GridListTileBar
                            title={url}
                            subtitle={url} />
                    </GridListTile>
                ))}
            </GridList>
        </div>);
    // <ul className="list">{list}</ul>;
};

export default withStyles(styles)(ImageList);