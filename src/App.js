import React from 'react';
import ImageList from './containers/ImageList'
import Search from "./containers/Search";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="search">search</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="viewer">viewer</Link>
                    </li>
                </ul>

            <hr />

            <Route exact path="/" component={Search} />
            <Route path="/search" component={Search} />
            <Route path="/viewer" component={ImageList} />

            {/*<div>*/}
                {/*<Search />*/}
                {/*<ImageList />*/}
            {/*</div>*/}
            </div>
        </Router>
    );
};

export default App;