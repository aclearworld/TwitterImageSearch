import React from 'react';
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
        backgroundColor: cyan100,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const App = ({classes}) => {
    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" className={classes.bar}>
                    <Toolbar>
                        <Link to="search" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="secondary" className={classes.menuButton}>
                                Search
                                <NavigateBefore />
                            </Button>
                        </Link>
                        <Link to="viewer" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="secondary" className={classes.menuButton}>
                                Viewer
                                <NavigateNext />
                            </Button>
                        </Link>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Twitter画像検索
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Route exact path="/" component={Search} />
                <Route path="/search" component={Search} />
                <Route path="/viewer" component={ImageList} />
            </div>
        </Router>
    );
};

const NavLink = props => (
    <li className="navItem">
        <Link {...props} style={{cursor: 'pointer', color: 'inherit'}} />
    </li>
);

export default withStyles(styles)(App);