var mapboxDataTeam = require('mapbox-data-team');

const config = {
    'API_BASE': 'https://osm-comments-api.mapbox.com/api/v1/',
    'MAPBOX_ACCESS_TOKEN': 'pk.eyJ1Ijoic2FuamF5YiIsImEiOiI3NjVvMFY0In0.byn_eCZGAwR1yaPeC-SVKw',
    'OSM_BASE': 'https://www.openstreetmap.org/',
    'STATIC_MAPS_BASE': 'https://api.mapbox.com/v4/mapbox.streets/',
    'USERS': mapboxDataTeam.getUsernames()
};

export default config;
