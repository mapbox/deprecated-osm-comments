import React from 'react';
import xhr from 'xhr';
import config from '../config';
import {Link} from 'react-router';
import NotesListItem from './NotesListItem';
import Loading from './Loading';
import NoResults from './NoResults';

var NotesList = React.createClass({
    getInitialState: function() {
        return {
            'notes': [],
            'loading': true
        };
    },
    componentDidMount: function() {
        // console.log('notes list did mount', this.props);
        // this.fetchNotes();
    },
    componentWillReceiveProps: function(newProps) {
        // console.log('list component will receive props', newProps);
        // this.fetchNotes(newProps);
    },
    // fetchNotes: function(props) {
    //     props = props || this.props;
    //     var queryURL = config.API_BASE + 'notes/' + props.location.search;
    //     var searchParams = props.location.query;
    //     xhr.get(queryURL, searchParams, (err, response) => {
    //         console.log('xhr response', response);
    //         var data = JSON.parse(response.body);
    //         var notes = data.features;
    //         var total = data.total;
    //         this.setState({
    //             'notes': notes,
    //             'total': total,
    //             'loading': false
    //         });
    //     });
    // },
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
            // console.log('note', note);
            // let elem = (
            //     <div key={note.properties.id}>
            //         <Link to={'/notes/' + note.properties.id}>
            //             {note.properties.id}
            //         </Link>
            //     </div>
            // );
            let elem = (
                <NotesListItem note={note} key={note.properties.id} />
            );
            notesHTML.push(elem);
        });
        // console.log('notesHTML', notesHTML);
        return (
            <div>
                This is a notes list: <br /><br />
                {notesHTML}
            </div>
        );
    }
});

export default NotesList;