import React from 'react';
import {Link} from 'react-router';

var NavBarFilter = React.createClass({
    render: function() {
        var allQuery = Object.assign({}, this.props.query, {show: "all"});
        var filterQuery = Object.assign({}, this.props.query, {show: undefined});

        var allActive = (this.props.query && this.props.query['show'] ? "active" : "");
        var filterActive = (this.props.query && this.props.query['show'] ? "" : "active");

        var filterLabel = (this.props.location == "/notes/" ? "Show open" : "Show unreplied");

        return (
            <div className='col3 rounded-toggle inline' id='filters'>
                <Link to={ this.props.location } query={ filterQuery } className={ filterActive }>{ filterLabel }</Link>
                <Link to={ this.props.location } query={ allQuery } className={ allActive }>Show all</Link>
            </div>
        );
    }
});

export default NavBarFilter;