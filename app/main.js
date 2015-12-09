import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Application';
import ContentContainer from './containers/Content';
import NotesContainer from './containers/Notes';
import ChangesetsContainer from './containers/Changesets';
import NotesDetail from './components/NotesDetail';
import ChangesetsDetail from './components/ChangesetsDetail';
import NotesList from './components/NotesList';
import ChangesetsList from './components/ChangesetsList';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory({
    queryKey: false
});

const routes = (
    <Router history={history}>
        <Redirect from="/" to="changesets/" />
        <Route path="/" component={App}>
            <Route path="notes/" component={NotesList} />
            <Route path="changesets/" component={ChangesetsList} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('application'));
