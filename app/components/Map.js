import React, {Component} from 'react';
import config from '../config';
import L from 'mapbox.js';

var Map = React.createClass({
    componentDidMount: function() {
        var token = config.MAPBOX_ACCESS_TOKEN;
        console.log('map component did mount');
        console.log('L', L);
        var map = L.map(this.refs.map)
            .setView([40, -74.50], 9);
        var tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: token
        }).addTo(map);

    },

    render: function() {
        return (
            <div className="col6 map" ref="map" />
        );
    }
});

export default Map;