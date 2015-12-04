import React, {Component} from 'react';
import {History} from 'react-router';
import utils from '../utils';

var NotesSearch = React.createClass({
    mixins: [History],
    componentDidMount: function() {
        // console.log('notes search did mount', this.props);

    },
    doSearch: function() {
        console.log('do notes search', this);
        var from = this.refs.from.value;
        var to = this.refs.to.value;
        var users = this.refs.users.value;
        var params = {};
        if (from) params.from = from;
        if (to) params.to = to;
        if (users) params.users = users;
        // console.log('search params', params);
        var query = utils.getQueryString(params);
        this.history.pushState(null, '/notes/search?' + query);
    },
    render: function() {
        return (
            <div className="pad1">
                <fieldset>
                    <label>From</label>
                    <input type="date" ref="from" />
                </fieldset>
                <fieldset>
                    <label>To</label>
                    <input type="date" ref="to" />
                </fieldset>
                <fieldset>
                    <label>Users</label>
                    <input type="text" ref="users" />
                </fieldset>
                <button className="button" onClick={this.doSearch}>Search</button>
            </div>
        );
    }
});

export default NotesSearch;