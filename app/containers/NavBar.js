import React from 'react';

const NavBar = React.createClass({

    render: function() {
        return (
            <nav className="col12 fill-navy dark z10 row1">
                <div className="limiter">
                    <nav className="clearfix primary">
                        <div className="col4 pad1y">
                            <a href="#" id='changesetLink' className="active block">Changesets</a>
                            <a href="#" id='noteLink' className="block pad2x">Notes</a>
                        </div>
                        <div className='col3 rounded-toggle inline' id='filters'>
                            <a id='filter1' className='active' href='#'>Show unreplied</a>
                            <a id='filter2' href='#'>Show all</a>
                        </div>
                        <div className="col4 pad0y margin1">
                            <fieldset className='with-icon'>
                              <span className='icon search'></span>
                              <input id='users' type='text' value='' />
                            </fieldset>
                        </div>
                    </nav>
                </div>
            </nav>
        );       

    }
});

export default NavBar;
