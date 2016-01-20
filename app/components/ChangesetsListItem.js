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
                <a className="icon contact quiet" title="Comment" href={config.OSM_BASE + 'user/' + props.lastCommentUserName}>
                    {props.lastCommentUserName}&nbsp;
                </a>
                <span className="quiet"> {utils.formatDate(props.lastCommentTimestamp)} </span>
                <div className="comment-last pad1rt"> {props.lastCommentComment} </div>
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
        var lastCommentHTML = this.getLastCommentHTML(props);
        return (
            <div className='clearfix box round pad2 blurb'>
                <div className="">
                    <div className="col8 row2">
                        <div className="clearfix">
                            <div className="col12">
                                <h3 className="fancy inline-heading middle inline fl">
                                    <a href={osmLink} target="_blank">{props.id}</a>
                                </h3>
                            </div>
                        </div>
                        <div className="quiet pad0y small">
                            <a className="icon account" title="User" href={osmUserLink} target="_blank">
                                {props.userName}
                            </a> | 
                            <span className="icon time" title="Date">{utils.formatDate(props.createdAt)}</span> |
                            <span className="icon data" title="Features modified">{props.numChanges}</span> |
                            <span className="icon contact" title="Number of comments">{props.discussionCount}</span> |
                            <a href={josmLink} className="icon crosshair" onClick={this.doJOSM}>
                                JOSM
                            </a>
                        </div>
                        <div className="prose pad1y quiet">
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