import React, {Component} from 'react';
import utils from '../utils';

var ChangesetsSearch = React.createClass({
    componentDidMount: function() {
        console.log('changesets search did mount');
    },
    doSearch: function() {
        console.log('do changesets search');
        var from = this.refs.from.value;
        var to = this.refs.to.value;
        var users = this.refs.users.value;
        var params = {};
        if (from) params.from = from;
        if (to) params.to = to;
        if (users) params.users = users;
        // console.log('search params', params);
        var query = utils.getQueryString(params);
        this.history.pushState(null, '/changesets/search?' + query);
    },
    render: function() {
        return (
            <div>
                <fieldset>
                    <label>From</label>
                    <input type="date" ref="from" className="stretch" />
                </fieldset>
                <fieldset>
                    <label>To</label>
                    <input type="date" ref="to" className="stretch" />
                </fieldset>
                <fieldset>
                    <label>Users (comma separated)</label>
                    <input type="text" ref="users" className="stretch" />
                </fieldset>
                <button className="button" onClick={this.doSearch}>Search</button>
            </div>
        );
    }

});

export default ChangesetsSearch;