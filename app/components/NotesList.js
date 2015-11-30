import React from 'react';
import xhr from 'xhr';
import config from '../config';
import {Link} from 'react-router';

var NotesList = React.createClass({
    getInitialState: function() {
        return {
            'notes': []
        };
    },
    componentDidMount: function() {
        console.log('notes list did mount');
        var queryURL = config.API_BASE + 'notes/';
        console.log('query url', queryURL);
        xhr.get(queryURL, this.props.params, (err, response) => {
            console.log('xhr response', response);
            var data = JSON.parse(response.body);
            var notes = data.features;
            var total = data.total;
            this.setState({
                'notes': notes,
                'total': total
            });
            this.render();
        });
    },
    render: function() {
        let notesHTML = [];
        this.state.notes.forEach(function(note) {
            console.log('note', note);
            let elem = (
                <div key={note.properties.id}>
                    <Link to={'/notes/' + note.properties.id}>
                        {note.properties.id}
                    </Link>
                </div>
            );
            notesHTML.push(elem);
        });
        console.log('notesHTML', notesHTML);
        return (
            <div>
                This is a notes list: <br /><br />
                {notesHTML}
            </div>
        );
    }
});

export default NotesList;