import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './components/home/home';
import Layout from './components/layout';

if (document.getElementsByClassName('react-root').length) {
    const reactRootArray = document.getElementsByClassName('react-root');

    for (const i in reactRootArray) {
        if (reactRootArray[i]) {
            ReactDOM.render((
                <Router
                    history={browserHistory}
                    createElement={(Component, props) => {
                    return <Component {...props}/>;
                }}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Home}/>
                    </Route>
                </Router>
            ), reactRootArray[i]);
        }
    }
}
