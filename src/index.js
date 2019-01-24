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


// const App = () => (
//     <Router>
//         <Route
//             render={({location}) => (
//                 <div className="fill">
//                     <Route exact path="/" render={() => <Redirect to="/hsl/10/90/50" />} />
//                     <ul className="nav">
//                         <NavLink to="/hsl/10/90/50">Red</NavLink>
//                         <NavLink to="/hsl/120/100/40">Green</NavLink>
//                         <NavLink to="/rgb/33/150/243">Blue</NavLink>
//                         <NavLink to="/rgb/240/98/146">Pink</NavLink>
//                     </ul>
//                     <div className="content">
//                         <Transition
//                             config={config.slow}
//                             keys={location.pathname}
//                             from={{opacity: 0, transform: 'scale3d(0.5,0.5,0.5)'}}
//                             enter={{opacity: 1, transform: 'scale3d(1,1,1)'}}
//                             leave={{opacity: 0, transform: 'scale3d(0.5,0.5,0.5)'}}>
//                             {style => (
//                                 <Switch location={location}>
//                                     <Route exact path="/hsl/:h/:s/:l" render={props => HSL({...props, style})} />
//                                     <Route exact path="/rgb/:r/:g/:b" render={props => RGB({...props, style})} />
//                                     <Route render={() => <div>Not Found</div>} />
//                                 </Switch>
//                             )}
//                         </Transition>
//                     </div>
//                 </div>
//             )}
//         />
//     </Router>
// )
//
// const NavLink = props => (
//     <li className="navItem">
//         <Link {...props} style={{cursor: 'pointer', color: 'inherit'}} />
//     </li>
// )
//
// const HSL = ({match: {params}, style}) => (
//     <div className="fill" style={{...style, background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`}}>
//         hsl({params.h}, {params.s}%, {params.l}%)
//     </div>
// )
//
// const RGB = ({match: {params}, style}) => (
//     <div className="fill" style={{...style, background: `rgb(${params.r}, ${params.g}, ${params.b})`}}>
//         rgb({params.r}, {params.g}, {params.b})
//     </div>
// )

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
