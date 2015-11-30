import React from 'react';

var ChangesetsDetail = React.createClass({
    componentDidMount: function() {
        console.log('changesets detail did mount');
    },
    render: function() {
        return (
            <div>
                This is a changeset detail.
            </div>
        );
    }
});

export default ChangesetsDetail;