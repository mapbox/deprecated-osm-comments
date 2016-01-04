import React from 'react';
import xhr from 'xhr';
import config from '../config';
import {Link} from 'react-router';
import NotesListItem from './NotesListItem';
import Loading from './Loading';
import NoResults from './NoResults';
import utils from '../utils';

var NotesList = React.createClass({
    getInitialState: function() {
        return {
            'notes': [],
            'loading': true
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
            const data = JSON.parse(response.body);
            const notes = data.features;
            const total = data.total;
            this.setState({
                'notes': notes,
                'total': total,
                'loading': false
            });
        });
    },
    render: function() {
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
               {notesHTML}
           </div>
        );
    }
});

export default NotesList;