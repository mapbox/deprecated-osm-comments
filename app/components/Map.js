import React, {Component} from 'react';
import config from '../config';
import L from 'mapbox.js';

var Map = React.createClass({
    componentDidMount: function() {
        var token = config.MAPBOX_ACCESS_TOKEN;
        L.mapbox.accessToken = token;
        L.mapbox.map(this.refs.map, 'mapbox.streets');
    },

    render: function() {
        return (
            <div className="col6 map" ref="map" />
        );
    }
});

export default Map;