import React, {Component} from 'react';
import {Link} from 'react-router';
import NotesSearch from './NotesSearch';
import ChangesetsSearch from './ChangesetsSearch';


var SearchContainer = React.createClass({
    componentDidMount: function() {
        console.log('search container did mount');
    },
    render: function() {
        console.log('search container state', this.state);
        console.log('search container props', this.props);
        var childComponent;
        var selected = this.props.selected;
        if (selected === 'notes') {
            childComponent = <NotesSearch />;
        } else {
            childComponent = <ChangesetsSearch />;
        }
        return (
            <div>
                I am the container for your <Link to="/changesets/42" query={{search: 'foo'}}>search</Link>.
                {childComponent}
            </div>
        );
    }
});

export default SearchContainer;