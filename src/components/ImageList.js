import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styleSheet from './ImageList.module.css';
import {Spring, config} from 'react-spring';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%',
    },
    contentRoot: {
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
    }
});

const page2X = [100, 0, -100];
const page2Y = [-100, 0, 100];
const page3X = [-100, 0, 100];
const page3Y = [-100, 0, 100];
const page4X = [100, 0, -100];
const page4Y = [100, 0, -100];
const page5X = [-100, 0, 100];
const page5Y = [100, 0, -100];


class Anim extends React.Component {
    state = {
        index: 0,
        page2X: page2X[0],
        page2Y: page2Y[0],
        page3X: page3X[0],
        page3Y: page3Y[0],
        page4X: page4X[0],
        page4Y: page4Y[0],
        page5X: page5X[0],
        page5Y: page5Y[0]
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            index: 1,
            page2X: page2X[1],
            page2Y: page2Y[1],
        }), 2000);
        setTimeout(() => this.setState({
            index: 2,
            page2X: page2X[2],
            page2Y: page2Y[2],
            page3X: page3X[1],
            page3Y: page3Y[1],
        }), 4000);
        setTimeout(() => this.setState({
            index: 3,
            page3X: page3X[2],
            page3Y: page3Y[2],
            page4X: page4X[1],
            page4Y: page4Y[1],
        }), 6000);
        setTimeout(() => this.setState({
            index: 4,
            page4X: page4X[2],
            page4Y: page4Y[2],
            page5X: page5X[1],
            page5Y: page5Y[1],
        }), 8000);
        setTimeout(() => this.setState({
            index: 5,
            page5X: page5X[2],
            page5Y: page5Y[2],
        }), 10000);
        setTimeout(() => this.setState({
            index: 6,
        }), 12000);
    }

    render() {
        if (this.state.index >= 6) {
            return <div style={{display: 'none'}} className={styleSheet.AnimationRoot}/>
        }
        return (
            <div className={styleSheet.AnimationRoot}>
                <Spring config={config.slow}
                        from={{opacity: 0, transform: `translateX(100%) translateY(${page2Y[0]}%)`}}
                        to={{
                            opacity: this.state.index === 1 ? 1 : 0,
                            transform: `translateX(${this.state.page2X}%) translateY(${this.state.page2Y}%)`
                        }}>
                    {props => <div className={styleSheet.AnimationPage2} style={props}>2</div>}
                </Spring>
                <Spring config={config.slow}
                        from={{opacity: 0, transform: `translateX(-100%) translateY(${page3Y[0]}%)`}}
                        to={{
                            opacity: this.state.index === 2 ? 1 : 0,
                            transform: `translateX(${this.state.page3X}%) translateY(${this.state.page3Y}%)`
                        }}>
                    {props => <div className={styleSheet.AnimationPage3} style={props}>3</div>}
                </Spring>
                <Spring config={config.slow}
                        from={{opacity: 0, transform: `translateX(100%) translateY(${page4Y[0]}%)`}}
                        to={{
                            opacity: this.state.index === 3 ? 1 : 0,
                            transform: `translateX(${this.state.page4X}%) translateY(${this.state.page4Y}%)`
                        }}>
                    {props => <div className={styleSheet.AnimationPage4} style={props}>4</div>}
                </Spring>
                <Spring config={config.slow}
                        from={{opacity: 0, transform: `translateX(-100%) translateY(${page5Y[0]}%)`}}
                        to={{
                            opacity: this.state.index === 4 ? 1 : 0,
                            transform: `translateX(${this.state.page5X}%) translateY(${this.state.page5Y}%)`
                        }}>
                    {props => <div className={styleSheet.AnimationPage5} style={props}>5</div>}
                </Spring>
            </div>
        )
    }
}

const ImageList = ({UrlSchemas, classes}) => {
    return (
        <div className={classes.root}>
            <div className={classes.contentRoot + ' ' + styleSheet.imageRoot}>
                <GridList className={classes.gridList} cellHeight={400} cols={4}>
                    {UrlSchemas.map(urlSchema => (
                        <GridListTile key={urlSchema.url} cols={1}>
                            <img className={classes.gridImg} src={urlSchema.url} alt=""/>
                            <GridListTileBar
                                title={urlSchema.text}
                                subtitle={urlSchema.url}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <Anim/>
        </div>
    );
    // <ul className="list">{list}</ul>;
};

export default withStyles(styles)(ImageList);