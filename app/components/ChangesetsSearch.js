import React, {Component} from 'react';

var ChangesetsSearch = React.createClass({
    componentDidMount: function() {
        console.log('changesets search did mount');
    },
    doSearch: function() {
        console.log('do changesets search');
    },
    render: function() {
        return (
            <div>
                Search Changesets: <br />
                From Date: <input type="date" id="notesFromDate" />
                To Date: <input type="date" id="notesToDate" /> <br />
                Users: <input type="text" id="notesUsers" /> <br />
                <button onClick={this.doSearch} />
            </div>
        );
    }

});

export default ChangesetsSearch;