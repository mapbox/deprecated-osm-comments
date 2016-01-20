import React from 'react';
import {Link} from 'react-router';
import utils from '../utils';
import config from '../config';
import StaticMap from './StaticMap';
import xhr from 'xhr';
import turfBuffer from 'turf-buffer';
import turfExtent from 'turf-extent';

var NotesListItem = React.createClass({
    doJOSM: function(e) {
        e.preventDefault();
        var bbox = this.getBBOX(this.props.note);
        var josmURL = `http://127.0.0.1:8111/zoom?left=${bbox[0]}&right=${bbox[2]}&top=${bbox[3]}&bottom=${bbox[1]}`;
        xhr.get(josmURL, {}, function(err, res) {
            if (err) {
                alert("Is JOSM running?");
            }
        });
    },

    getBBOX: function(note) {
        var buffer = turfBuffer(note, 100, 'meters');
        var extent = turfExtent(buffer);
        return extent;
    },
    getLastCommentHTML: function(props) {
        var isAnonymous = props.lastCommentUserName ? false : true;
        var isOpeningComment = props.lastCommentAction === 'opened' ? true : false;
        if (isOpeningComment) {
            return '';
        }
        var userHTML;
        if (isAnonymous) {
            userHTML = (
                <span className="">
                    Anonymous
                </span>
            )
        } else {
            userHTML = (
                <a className="" href={config.OSM_BASE + 'user/' + props.lastCommentUserName} target="_blank">
                    {props.lastCommentUserName}
                </a>
            )
        }
        var commentString = props.lastCommentAction + " " + utils.formatDate(props.lastCommentTimestamp);
        return (
            <div className="space-top1">
                <span className="icon contact comment-user quiet" title="Comment">{userHTML} </span>
                <span className="quiet">{commentString}</span>
                <div className="comment-last pad1rt">{props.lastCommentComment}</div>
            </div>
        )
    },
    render: function() {
        var note = this.props.note;
        var props = note.properties;
        var osmLink = config.OSM_BASE + 'note/' + props.id;
        var isOpen = props.closedAt ? false : true;
        var lng = note.geometry.coordinates[0];
        var lat = note.geometry.coordinates[1];
        var commentCount = props.commentCount;
        var commentText = commentCount === 1 ? 'Comment' : 'Comments';
        var zoom = 13;
        if (isOpen) {
            var statusHTML = (
                    <span className="button short fill-green button-status button-inline pad1x fl space-top0 space-left1">
                        Open
                    </span> 
            );
        } else {
            var statusHTML = (
                    <span className="button short fill-green button-status button-inline pad1x fl space-top0 space-left1">
                        Closed
                    </span> 
            )
        }
        var isAnonymous = props.userName ? false : true;
        if (isAnonymous) {
            var userHTML = (
                <span className="icon account" title="User">Anonymous</span>
            );
        } else {
            var userHTML = (
                <a className="icon account" title="User" href={config.OSM_BASE + 'user/' + props.userName} target="_blank">
                    {props.userName}
                </a>
            );
        }
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
                                    {statusHTML}  
                                </div>
                            </div>
                            <div className="quiet pad0y small">
  
                                {userHTML} | 
                                <span className="icon time" href="#" title="Date">{utils.formatDate(props.createdAt)}</span> |
                                <span className="icon contact" title="Number of comments">{props.commentCount}</span> |
                                <a className="icon crosshair" onClick={this.doJOSM} href="#">JOSM</a>

                            </div>
                            <div className="prose pad1y quiet">
                                {props.note}
                                {lastCommentHTML}
                            </div>
                        </div>
                        <div className="col4 clip">
                            <StaticMap
                                lat={lat}
                                lng={lng}
                                zoom={zoom}
                                config={config}
                            />
                        </div>
                    </div>
                </div>
        );
    }
});

export default NotesListItem;