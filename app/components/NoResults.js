import React from 'react';

var NoResults = React.createClass({
    render: function() {
        return (
            <div className="pad2y">
                <h5 className="center fancy">No results found.</h5>
            </div>
        );
    }
});

export default NoResults;