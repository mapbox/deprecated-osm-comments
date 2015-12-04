import React, {Component} from 'react';

var Map = React.createClass({
    componentDidMount: function() {
        console.log('map component did mount');
    },

    render: function() {
        return (
            <div className="col6">
                I am your map.
            </div>
        );
    }
});

export default Map;