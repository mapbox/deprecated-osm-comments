import React, {Component} from 'react';

var NotesSearch = React.createClass({
    componentDidMount: function() {
        console.log('notes search did mount');
    },
    doSearch: function() {
        console.log('do notes search');
    },
    render: function() {
        return (
            <div>
                Search Notes: <br />
                From Date: <input type="date" id="notesFromDate" />
                To Date: <input type="date" id="notesToDate" /> <br />
                Users: <input type="text" id="notesUsers" /><br />
                <button onClick={this.doSearch} />
            </div>
        );
    }
});

export default NotesSearch;