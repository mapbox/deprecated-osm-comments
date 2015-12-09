import React from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import ChangesetsListItem from './ChangesetsListItem';
import xhr from 'xhr';
import config from '../config';

var ChangesetsList = React.createClass({
    // getInitialState: function() {
    //     return {
    //         'changesets': [],
    //         'loading': true
    //     };
    // },
    // componentDidMount: function() {
    //     this.fetchChangesets();
    // },
    // componentWillReceiveProps: function(newProps) {
    //     this.fetchChangesets(newProps);
    // },
    // fetchChangesets: function(props) {
    //     props = props || this.props;
    //     var queryURL = config.API_BASE + 'changesets/' + props.location.search;
    //     var searchParams = props.location.query;
    //     xhr.get(queryURL, searchParams, (err, response) => {
    //         console.log('xhr response', response);
    //         var data = JSON.parse(response.body);
    //         var changesets = data.features;
    //         var total = data.total;
    //         this.setState({
    //             'changesets': changesets,
    //             'total': total,
    //             'loading': false
    //         });
    //     });
    // },
    render: function() {
        console.log('rendering changesets list');
        return (
            <div className='clearfix pad4y limiter' id="changesets">
                <div className='clearfix box round pad2'>
                    <div className="">
                        <div className="col8 row2">
                            <h3 className="fancy"><a href="#">Changeset: 35822710</a></h3>
                            <a className="icon account" href="#">geohacker</a> | 
                            <a className="icon time" href="#">December 8, 2015</a> |
                            <a className="icon data" href="#">87</a> |
                            <a className="icon contact"href="">5</a> |
                            <a className="icon crosshair" href="#">JOSM</a>
                            <div className="row4 pad1y">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. 
                            </div>
                        </div>
                        <div className="col4 clip">
                            <img src="css/map.png" />
                        </div>
                    </div>
                </div>
                <div className='clearfix box round pad2'>
                    <div className="">
                        <div className="col8 row2">
                            <h3 className="fancy"><a href="#">Changeset: 35822710</a></h3>
                            <a className="icon account" href="#">geohacker</a> | 
                            <a className="icon time" href="#">December 8, 2015</a> |
                            <a className="icon data" href="#">87</a> |
                            <a className="icon contact"href="">5</a> |
                            <a className="icon crosshair" href="#">JOSM</a>
                            <div className="row4 pad1y">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. 
                            </div>
                        </div>
                        <div className="col4 clip">
                            <img src="css/map.png" />
                        </div>
                    </div>
                </div>             
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