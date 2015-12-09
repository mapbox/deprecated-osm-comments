import React from 'react';
import {Link} from 'react-router';
import utils from '../utils';
import config from '../config';
import turfCentroid from 'turf-centroid';
import xhr from 'xhr';
import StaticMap from './StaticMap';

var ChangesetsListItem = React.createClass({
    getStaticMap: function() {
        var changeset = this.props.changeset;
        var centerPoint = turfCentroid(changeset);
        var lng = centerPoint.geometry.coordinates[0];
        var lat = centerPoint.geometry.coordinates[1];
        return (
            <StaticMap
                lat={lat}
                lng={lng}
                zoom={12}
                config={config} />            
        );
    },

    doJOSM: function(e) {
        e.preventDefault();
        var url = config.OSM_BASE + 'api/0.6/changeset/' + this.props.changeset.properties.id;
        var josmURL = `http://127.0.0.1:8111/import?url=${url}/download`;
        xhr.get(josmURL, {}, function(err, res) {
            if (err) {
                alert("Is JOSM Running?");
            }
            console.log("success JOSM call", res);
        });
    },

    render: function() {
        var changeset = this.props.changeset;
        var props = changeset.properties;
        // var link = '/changesets/' + props.id;
        var osmLink = config.OSM_BASE + 'changeset/' + props.id;
        var osmUserLink = config.OSM_BASE + 'user/' + props.userName;
        var staticMap = this.getStaticMap();
        return (
            <div className='clearfix box round pad2'>
                <div className="">
                    <div className="col8 row2">
                        <h3 className="fancy">
                            <a href={osmLink} target="_blank">Changeset: {props.id}</a>
                        </h3>
                        <a className="icon account" href={osmUserLink} target="_blank">
                            {props.userName}
                        </a> | 
                        <span className="icon time">{utils.formatDate(props.createdAt)}</span> |
                        <span className="icon data">{props.numChanges}</span> |
                        <span className="icon contact">{props.discussionCount}</span> |
                        <a href="#" className="icon crosshair" onClick={this.doJOSM}>
                            JOSM
                        </a>
                        <div className="row4 pad1y">
                            {props.changesetComment || 'No comment'} 
                        </div>
                    </div>
                    <div className="col4 clip">
                        {staticMap}
                    </div>
                </div>
            </div>
            // <div>
            //     Opened on: {utils.formatDate(props.createdAt)},
            //     Closed on: {utils.formatDate(props.closedAt || '-')},
            //     By: {props.userName || 'Anonymous'} <br />
            //     Number of changes: {props.numChanges}<br />
            //     Discussion items: {props.discussionCount}<br />
            //     <Link to={link}>
            //         {props.changesetComment || 'No comment'}
            //     </Link>
            //     <br /><br />
            // </div>
        );
    }
});

export default ChangesetsListItem;