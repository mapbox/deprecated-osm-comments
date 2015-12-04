import React from 'react';
import ChangesetsSearch from '../components/ChangesetsSearch';

var ChangesetsContainer = React.createClass({

    render: function() {
        return (
            <div class="clearfix">
                <ChangesetsSearch />
                {this.props.children}
            </div>
        );
    }

});

export default ChangesetsContainer;