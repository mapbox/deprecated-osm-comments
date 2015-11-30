import React from 'react';

var NotesDetail = React.createClass({
    componentDidMount: function() {
        console.log('notes detail did mount');
    },
    render: function() {
        return (
            <div>
                This is a note detail.
            </div>
        );
    }
});

export default NotesDetail;