import React from 'react';
import NavBarTab from '../components/NavBarTab';
import NavBarFilter from '../components/NavBarFilter';
import NavBarSearch from '../components/NavBarSearch';

const NavBar = React.createClass({

    render: function() {
        return (
            <nav className="col12 fill-navy dark z10 row1">
                <div className="limiter">
                    <nav className="clearfix primary">
                        <NavBarTab location={this.props.location.pathname} query={this.props.location.query} />
                        <NavBarFilter location={this.props.location.pathname} query={this.props.location.query} />
                        <NavBarSearch location={this.props.location.pathname} query={this.props.location.query} />
                    </nav>
                </div>
            </nav>
        );       

    }
});

export default NavBar;
