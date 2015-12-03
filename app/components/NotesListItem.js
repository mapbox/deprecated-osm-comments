import React from 'react';
import {Link} from 'react-router';
import utils from '../utils';

var NotesListItem = React.createClass({

    render: function() {
        var note = this.props.note;
        var noteProps = note.properties;
        var link = '/notes/' + noteProps.id;

        return (
            <div>
                Opened on: {utils.formatDate(noteProps.createdAt)},
                Closed on: {utils.formatDate(noteProps.closedAt || '-')},
                By: {noteProps.userName || 'Anonymous'} <br />
                <Link to={link}>
                    {noteProps.note}
                </Link>
                <br /><br />
            </div>
        );
    }
});

export default NotesListItem;