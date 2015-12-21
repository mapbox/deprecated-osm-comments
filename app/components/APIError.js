import React from 'react';

var APIError = React.createClass({
    render: function() {
        return (
            <div>
                API Service down or unavailable.
            </div>
        );
    }
});

export default APIError;