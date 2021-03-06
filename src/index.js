import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import rootReducer from "./reducers/index";
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


import {Transition, config} from 'react-spring'
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'


const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
