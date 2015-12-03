import React from 'react';
import {Link} from 'react-router';
import utils from '../utils';

var NotesListItem = React.createClass({

    render: function() {
        var changeset = this.props.changeset;
        var props = changeset.properties;
        var link = '/changesets/' + props.id;

        return (
            <div>
                Opened on: {utils.formatDate(props.createdAt)},
                Closed on: {utils.formatDate(props.closedAt || '-')},
                By: {props.userName || 'Anonymous'} <br />
                Number of changes: {props.numChanges}<br />
                Discussion items: {props.discussionCount}<br />
                <Link to={link}>
                    {props.changesetComment || 'No comment'}
                </Link>
                <br /><br />
            </div>
        );
    }
});

export default NotesListItem;