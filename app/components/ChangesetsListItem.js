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
        if (changeset.geometry) {
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
        } else {
            return (
                <img width="319" height="192" />
            )
        }
    },

    doJOSM: function(e) {
        e.preventDefault();
        var url = config.OSM_BASE + 'api/0.6/changeset/' + this.props.changeset.properties.id;
        var josmURL = this.getJOSMLink();
        xhr.get(josmURL, {}, function(err, res) {
            if (err) {
                alert("Is JOSM Running?");
            }
            console.log("success JOSM call", res);
        });
    },

    getJOSMLink: function() {
        var url = config.OSM_BASE + 'api/0.6/changeset/' + this.props.changeset.properties.id;
        return `http://127.0.0.1:8111/import?url=${url}/download`;        
    },

    getLastCommentHTML: function(props) {
        return (
            <div>
                <a className="icon account" href={config.OSM_BASE + 'user/' + props.lastCommentUserName}>
                    {props.lastCommentUserName}&nbsp;
                </a>
                {utils.formatDate(props.lastCommentTimestamp)}: {props.lastCommentComment}
            </div>
        )
    },

    render: function() {
        var changeset = this.props.changeset;
        var props = changeset.properties;
        var osmLink = config.OSM_BASE + 'changeset/' + props.id;
        var osmUserLink = config.OSM_BASE + 'user/' + props.userName;
        var josmLink = this.getJOSMLink();
        var staticMap = this.getStaticMap();
        var discussionCount = props.discussionCount;
        var commentText = discussionCount === 1 ? 'Comment' : 'Comments';
        var lastCommentHTML = this.getLastCommentHTML(props);
        return (
            <div className='clearfix box round pad2'>
                <div className="">
                    <div className="col8 row2">
                        <h3 className="fancy">
                            <a href={osmLink} target="_blank">{props.id}</a>
                        </h3>
                        {discussionCount} {commentText}
                        <a className="icon account" href={osmUserLink} target="_blank">
                            {props.userName}
                        </a> | 
                        <span className="icon time">{utils.formatDate(props.createdAt)}</span> |
                        <span className="icon data">{props.numChanges}</span> |
                        <span className="icon contact">{props.discussionCount}</span> |
                        <a href={josmLink} className="icon crosshair" onClick={this.doJOSM}>
                            JOSM
                        </a>
                        <div className="row4 pad1y">
                            {lastCommentHTML}
                        </div>
                    </div>
                    <div className="col4 clip">
                        {staticMap}
                    </div>
                </div>
            </div>
        );
    }
});

export default ChangesetsListItem;