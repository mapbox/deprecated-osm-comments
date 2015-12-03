import React from 'react';
import xhr from 'xhr';
import config from '../config';
import Loading from './Loading';
import utils from '../utils';

var ChangesetsDetail = React.createClass({
    getInitialState: function() {
        return {
            'changeset': {},
            'loading': true
        };
    },
    componentDidMount: function() {
        var id = this.props.params.id;
        var url = config.API_BASE + 'changesets/' + id;
        xhr.get(url, {}, (err, response) => {
            this.setState({
                'changeset': JSON.parse(response.body),
                'loading': false
            });
        });
    },
    render: function() {
        if (this.state.loading) {
            return (
                <Loading />
            );
        }
        console.log('this state', this.state);
        var props = this.state.changeset.properties;
        let discussionHTML = [];
        props.comments.forEach(function(comment) {
            let html = (
                <div key={comment.id}>
                    On: {utils.formatDate(comment.timestamp)}<br />
                    By: {comment.userName || 'Anonymous'}
                    Comment: {comment.comment} <br /><br />
                </div>
            );
            discussionHTML.push(html);
        });
        let tagsHTML = [];
        props.tags.forEach(function(tag) {
            let html = (
                <div key={tag.id}>
                    {tag.key}: {tag.value}
                </div>
            );
            tagsHTML.push(html);
        });
        return (
            <div>
                Changeset opened on {utils.formatDate(props.createdAt)} by {props.userName || 'Anonymous'} <br /><br />
                Discussions: <br /><br />
                {discussionHTML} <br /><br />
                Tags:
                {tagsHTML}
            </div>
        );
    }
});

export default ChangesetsDetail;