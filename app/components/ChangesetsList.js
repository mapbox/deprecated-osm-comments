import React from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import ChangesetsListItem from './ChangesetsListItem';
import xhr from 'xhr';
import config from '../config';

var ChangesetsList = React.createClass({
    getInitialState: function() {
        return {
            'changesets': [],
            'loading': true
        };
    },
    componentDidMount: function() {
        this.fetchChangesets();
    },
    componentWillReceiveProps: function(newProps) {
        this.fetchChangesets(newProps);
    },
    fetchChangesets: function(props) {
        props = props || this.props;
        var queryURL = config.API_BASE + 'changesets/' + props.location.search;
        var searchParams = props.location.query;
        xhr.get(queryURL, searchParams, (err, response) => {
            console.log('xhr response', response);
            var data = JSON.parse(response.body);
            var changesets = data.features;
            var total = data.total;
            this.setState({
                'changesets': changesets,
                'total': total,
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
            <div>
                {changesetsHTML}
            </div>
        );
    }
});

export default ChangesetsList;