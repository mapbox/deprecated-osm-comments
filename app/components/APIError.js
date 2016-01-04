import React from 'react';

var APIError = React.createClass({
    render: function() {
        return (
            <div className="pad2y">
                <h5 className="center fancy">An unexpected error occurred.</h5>
            </div>
        );
    }
});

export default APIError;