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
            <div className="col6 pad1 clearfix">
                <div className="col12 clearfix">
                    <div className="col4 margin1 pad1 fill-blue dark center">
                        <Link to="/notes/search">Notes</Link>
                    </div>
                    <div className="col4 margin1 pad1 fill-blue dark center">
                        <Link to="/changesets/search">Changesets</Link>
                    </div>
                </div>
                {child}
            </div>
        );
    }
});

export default ContentContainer;
