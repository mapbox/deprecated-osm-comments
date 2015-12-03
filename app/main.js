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
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory({
    queryKey: false
});

const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="notes/" component={NotesContainer}>
                <Route path="search" component={NotesList} />
                <Route path=":id" component={NotesDetail} />
            </Route>
            <Route path="changesets/" component={ChangesetsContainer}>
                <Route path="search" component={ChangesetsList} />
                <Route path="changesets/:id" component={ChangesetsDetail} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('application'));
