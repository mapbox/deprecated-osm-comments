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
                Search Changesets: <br />
                From Date: <input type="date" ref="from" />
                To Date: <input type="date" ref="to" /> <br />
                Users: <input type="text" ref="users" /> <br />
                <button onClick={this.doSearch}>Search</button>
            </div>
        );
    }

});

export default ChangesetsSearch;