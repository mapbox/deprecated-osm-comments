import React from 'react';

var ChangesetsList = React.createClass({
    componentDidMount: function() {
        console.log('changesets list did mount');
    },
    render: function() {
        return (
            <div>
                This is a changeset list.
            </div>
        );
    }
});

export default ChangesetsList;