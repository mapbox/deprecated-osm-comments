import React from 'react';
import xhr from 'xhr';
import config from '../config';
import moment from 'moment';
import utils from '../utils';
import Loading from './Loading';

var NotesDetail = React.createClass({
    getInitialState: function() {
        return {
            'note': {},
            'loading': true
        };
    },
    componentDidMount: function() {
        console.log('notes detail did mount', this.props);
        var noteID = this.props.params.id;
        var url = config.API_BASE + 'notes/' + noteID;
        xhr.get(url, {}, (err, response) => {
            this.setState({
                'note': JSON.parse(response.body),
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
        // console.log('this state', this.state);
        var noteProps = this.state.note.properties;
        let discussionHTML = [];
        noteProps.comments.forEach(function(comment) {
            let html = (
                <div key={comment.id}>
                    Action: {comment.action}<br />
                    On: {utils.formatDate(comment.timestamp)}<br />
                    By: {comment.userName || 'Anonymous'}
                    Comment: {comment.comment} <br /><br />
                </div>
            );
            discussionHTML.push(html);
        });
        return (
            <div>
                Note opened on {utils.formatDate(noteProps.createdAt)} by {noteProps.userName || 'Anonymous'} <br /><br />
                Discussions: <br /><br />
                {discussionHTML}
            </div>
        );
    }
});

export default NotesDetail;