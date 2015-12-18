import React from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import ChangesetsListItem from './ChangesetsListItem';
import xhr from 'xhr';
import config from '../config';
import utils from '../utils';

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
            params.text = query.q;
        }
        return utils.getQueryString(params);
    },
    fetchChangesets: function(props) {
        props = props || this.props;
        var queryURL = config.API_BASE + 'changesets/?';
        queryURL += this.getQueryString(props);
        // var searchParams = props.location.query;
        this.setState({
            'changesets': [],
            'loading': true
        });
        xhr.get(queryURL, (err, response) => {
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
        console.log('rendering changesets list');
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
        // if (this.state.loading) {
        //     return (
        //         <Loading />
        //     );
        // }
        // if (this.state.changesets.length === 0) {
        //     return (
        //         <NoResults />
        //     );
        // }
        // let changesetsHTML = [];
        // this.state.changesets.forEach(function(changeset) {
        //     let elem = (
        //         <ChangesetsListItem changeset={changeset} key={changeset.properties.id} />
        //     );
        //     changesetsHTML.push(elem);
        // });

        // return (
        //     <div>
        //         {changesetsHTML}
        //     </div>
        // );
    }
});

export default ChangesetsList;