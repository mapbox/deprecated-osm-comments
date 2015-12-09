import React from 'react';

const StaticMap = React.createClass({

    render: function() {
        var config = this.props.config;
        var lat = this.props.lat;
        var lng = this.props.lng;
        var zoom = this.props.zoom;
        var mapURL = config.STATIC_MAPS_BASE + lng + "," + lat + ',' + zoom + '/500x300.png?access_token=' + config.MAPBOX_ACCESS_TOKEN;
        return (
            <img src={mapURL} />
        )
    }
});

export default StaticMap;