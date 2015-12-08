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
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import thunk from 'redux-thunk';
import reducers from './reducers';


const history = createHistory({
    queryKey: false
});

const reducer = combineReducers(Object.assign({}, { directory: reducers }, {
  routing: routeReducer
}));

const store = applyMiddleware(thunk)(createStore)(reducer);

syncReduxAndRouter(history, store);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="notes/" component={NotesContainer}>
                    <Route path="search" component={NotesList} />
                    <Route path=":id" component={NotesDetail} />
                </Route>
                <Route path="changesets/" component={ChangesetsContainer}>
                    <Route path="search" component={ChangesetsList} />
                    <Route path=":id" component={ChangesetsDetail} />
                </Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('application'));
