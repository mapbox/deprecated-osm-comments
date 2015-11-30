import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Application';
import ContentContainer from './components/ContentContainer';
import { Router, Route, IndexRoute } from 'react-router';


const routes = (
    <Router>
        <Route path="/" component={App}>
            <Route path="notes/" component={App} />
            <Route path="notes/:id" component={App} />
            <Route path="changesets/" component={App} />
            <Route path="changesets/:id" component={App} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('application'));
