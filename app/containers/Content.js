import React, {Component} from 'react';
import {Link} from 'react-router';
import NotesContainer from './Notes';
import ChangesetsContainer from './Changesets';

var ContentContainer = React.createClass({

    // getChildComponent: function() {
    //     var selected = this.props.selected;
    //     // var params = this.props.params;
    //     if (selected === 'notes') {
    //         return (
    //             <NotesContainer />
    //         );
    //     } else {
    //         return (
    //             <ChangesetsContainer />
    //         );
    //     }
    // },

    render: function() {
        // ar childComponent = this.getChildComponent();
        console.log('content container props', this.props);
        var child = this.props.child;
        return (
            <div>
                Content container: <br />
                <Link to="/notes/search">Notes</Link>
                <Link to="/changesets/search">Changesets</Link>
                {child}
            </div>
        );
    }
});

export default ContentContainer;
