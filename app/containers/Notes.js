import React from 'react';
import NotesSearch from '../components/NotesSearch';

var NotesContainer = React.createClass({

    render: function() {
        console.log('notes container props', this.props);
        return (
            <div class="clearfix">
                <NotesSearch />
                {this.props.children}
            </div>
        );
    }

});

export default NotesContainer;