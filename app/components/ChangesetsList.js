import React from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import APIError from './APIError';
import ChangesetsListItem from './ChangesetsListItem';
import xhr from 'xhr';
import config from '../config';
import utils from '../utils';

var ChangesetsList = React.createClass({
    getInitialState: function() {
        return {
            'changesets': [],
            'loading': true,
            'apiError': false
        };
    },
    componentDidMount: function() {
        this.fetchChangesets();
    },
    componentWillReceiveProps: function(newProps) {
        this.fetchChangesets(newProps);
    },
    getQueryString: function(props) {
        var query = props.location.query;
        var params = {
            'unReplied': 'true',
            'users': config.USERS.join(','),
            'sort': '-discussed_at',
            'limit': 100
        };
        if (query.show === 'all') {
            delete params.unReplied;
        }
        if (query.q) {
            var queryComponents = utils.getQueryComponents(query.q);
            params.text = queryComponents.text;
            delete queryComponents.text;
            params = Object.assign({}, params, queryComponents);
            if (params.users === '*') {
                delete params.users;
            }
        }
        return utils.getQueryString(params);
    },
    fetchChangesets: function(props) {
        props = props || this.props;
        var queryURL = config.API_BASE + 'changesets/?';
        queryURL += this.getQueryString(props);
        this.setState({
            'changesets': [],
            'loading': true
        });
        xhr.get(queryURL, (err, response) => {
            if (err) {
                return this.setState({
                    'apiError': err
                });
            }
            var statusCode = response.statusCode;
            if (statusCode > 400) {
                return this.setState({
                    'apiError': JSON.parse(response.body).message
                });
            }
            var data = JSON.parse(response.body);
            var changesets = data.features;
            var total = data.total;
            this.setState({
                'changesets': changesets,
                'total': total,
                'loading': false,
                'apiError': false
            });
        });
    },
    render: function() {
        if (this.state.apiError) {
            return (
                <APIError error={this.state.apiError} />
            )
        }
        if (this.state.loading) {
            return (
                <Loading />
            );
        }
        if (this.state.changesets.length === 0) {
            return (
                <NoResults />
            );
        }
        let changesetsHTML = [];
        this.state.changesets.forEach(function(changeset) {
            let elem = (
                <ChangesetsListItem changeset={changeset} key={changeset.properties.id} />
            );
            changesetsHTML.push(elem);
        });
        return (
            <div className='clearfix pad4y limiter' id="changesets">
                {changesetsHTML}
            </div>  
        );
    }
});

export default ChangesetsList;