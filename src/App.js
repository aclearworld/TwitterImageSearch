import React, {Component} from 'react';
import ImageList from './containers/ImageList'
import Search from "./containers/Search";
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';
import {Transition, config, animated} from 'react-spring'

const cyan100 = cyan["600"];

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    bar: {
        height: '10%',
        width: '100%',
        backgroundColor: cyan100,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    mainContentBox: {
        height: '90%',
        width: '100%',
    },
    mainContent: {
        height: '100%',
        width: '100%',
    }
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.bar}>
                    <Toolbar>
                        <Button variant="contained" color="secondary" className={classes.menuButton}>
                            Search
                            {/*<NavigateBefore/>*/}
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.menuButton}>
                            Viewer
                            {/*<NavigateNext/>*/}
                        </Button>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Twitter画像検索
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.mainContentBox}>
                    <Search className={classes.mainContent}/>
                    <ImageList className={classes.mainContent}/>
                </div>
            </div>
        );
    };
}

export default withStyles(styles)(App);