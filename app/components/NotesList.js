import React from 'react';
import xhr from 'xhr';
import config from '../config';
import {Link} from 'react-router';
import NotesListItem from './NotesListItem';
import Loading from './Loading';
import APIError from './APIError';
import NoResults from './NoResults';
import utils from '../utils';

var NotesList = React.createClass({
    getInitialState: function() {
        return {
            'notes': [],
            'loading': true,
            'apiError': false
        };
    },
    componentDidMount: function() {
        this.fetchNotes();
    },
    componentWillReceiveProps: function(newProps) {
        this.fetchNotes(newProps);
    },
    getQueryString: function(props) {
        var query = props.location.query;
        var params = {
            'users': config.USERS.join(','),
            'isOpen': 'true',
            'sort': '-commented_at',
            'limit': 100
        };
        if (query.show === 'all') {
            delete params.isOpen;
        }
        if (query.q) {
            var queryComponents = utils.getQueryComponents(query.q);
            params.comment = queryComponents.text;
            delete queryComponents.text;
            params = Object.assign({}, params, queryComponents);
            if (params.users === '*') {
                delete params.users;
            }
        }
        return utils.getQueryString(params);
    },
    fetchNotes: function(props) {
        props = props || this.props;
        var queryURL = config.API_BASE + 'notes/?';
        queryURL += this.getQueryString(props);
        this.setState({
            'loading': true,
            'notes': []
        });
        xhr.get(queryURL, (err, response) => {
            if (err) {
                return this.setState({
                    'apiError': err
                });
            }
            const statusCode = response.statusCode;
            if (statusCode > 400) {
                return this.setState({
                    'apiError': JSON.parse(response.body).message
                });
            }
            const data = JSON.parse(response.body);
            const notes = data.features;
            const total = data.total;
            this.setState({
                'notes': notes,
                'total': total,
                'loading': false,
                'apiError': false
            });
        });
    },
    render: function() {
        if (this.state.apiError) {
            return (
                <APIError error={this.state.apiError} />
            )
        }
        if (this.state.loading) {
            return (
                <Loading />
            );
        }
        if (this.state.notes.length === 0) {
            return (
                <NoResults />
            );
        }
        let notesHTML = [];
        this.state.notes.forEach(function(note) {
            let elem = (
                <NotesListItem note={note} key={note.properties.id} />
            );
            notesHTML.push(elem);
        });
        return (
           <div className='clearfix pad4y limiter' id="notes">
               <h3 className="center pad1y">Total Results: {this.state.total}</h3>
               {notesHTML}
           </div>
        );
    }
});

export default NotesList;