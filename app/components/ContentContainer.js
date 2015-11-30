import React, {Component} from 'react';
import ChangesetsDetail from './ChangesetsDetail';
import ChangesetsList from './ChangesetsList';
import NotesDetail from './NotesDetail';
import NotesList from './NotesList';

var ContentContainer = React.createClass({
    componentDidMount: function() {
        console.log('content container did mount.');
    },
    componentWillReceiveProps: function(newProps) {
        console.log('content container will receive props', arguments);
        console.log('thisProps', this.props.params);
        console.log('thisState', this.state);
        console.log('just this', this);
    },

    getChildComponent: function() {
        var selected = this.props.selected;
        var viewType = this.props.type;
        var params = this.props.params;
        if (selected === 'notes' && viewType === 'list') {
            return (
                <NotesList params={params} />
            );
        } else if (selected === 'notes' && viewType === 'detail') {
            return (
                <NotesDetail params={params} />
            )
        } else if (selected === 'changesets' && viewType === 'list') {
            return (
                <ChangesetsList params={params} />
            )
        } else if (selected === 'changesets' && viewType === 'detail') {
            return (
                <ChangesetsDetail params={params} />
            );
        } else {
            return (
                <div>Error</div>
            )
        }
    },

    render: function() {
        console.log('content container render called');
        console.log('id', this.props.params ? this.props.params.id : null);
        var childComponent = this.getChildComponent();
        return (
            <div>
                I am the container for your actual content.
                {childComponent}
            </div>
        );
    }
});

export default ContentContainer;