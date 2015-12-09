import React from 'react';
import {Link} from 'react-router';


var NavBarTab = React.createClass({
    render: function() {
        var changesetsActive = (this.props.location == "/changesets/" ? "active" : "");
        var notesActive = (this.props.location == "/notes/" ? "active" : "");
        return (
            <div className="col4 pad1y">
                <Link to="/changesets/" query={ this.props.query } className={ changesetsActive + " block"}>Changesets</Link>
                <Link to="/notes/" query={ this.props.query } className={notesActive + " block pad2x"}>Notes</Link>
            </div>
        );
    }
});

export default NavBarTab;