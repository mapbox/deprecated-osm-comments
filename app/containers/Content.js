import React, {Component} from 'react';
import {Link} from 'react-router';

var ContentContainer = React.createClass({
    render: function() {
        var child = this.props.child;
        return (
            <div>
                {child}
            </div>
        );
    }
});

export default ContentContainer;
