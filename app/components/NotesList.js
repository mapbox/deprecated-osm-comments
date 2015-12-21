import React from 'react';
import xhr from 'xhr';
import config from '../config';
import {Link} from 'react-router';
import NotesListItem from './NotesListItem';
import Loading from './Loading';
import NoResults from './NoResults';
import utils from '../utils';

var NotesList = React.createClass({
    getInitialState: function() {
        return {
            'notes': [],
            'loading': true
        };
    },
    componentDidMount: function() {
        // console.log('notes list did mount', this.props);
        this.fetchNotes();
    },
    componentWillReceiveProps: function(newProps) {
        // console.log('list component will receive props', newProps);
        this.fetchNotes(newProps);
    },
    getQueryString: function(props) {
        console.log('props passed to notesList', props);
        var query = props.location.query;
        var params = {
            'users': config.USERS.join(','),
            'isOpen': 'true',
            'sort': '-commented_at',
            'limit': 100
        };
        if (query.show === 'all') {
            delete params.isOpen;
        }
        if (query.q) {
            var queryComponents = utils.getQueryComponents(query.q);
            params.comment = queryComponents.text;
            if (queryComponents.users) {
                params.users = queryComponents.users.join(',');
            }
        }
        return utils.getQueryString(params);
    },
    fetchNotes: function(props) {
        props = props || this.props;
        var queryURL = config.API_BASE + 'notes/?';
        queryURL += this.getQueryString(props);
        this.setState({
            'loading': true,
            'notes': []
        });
        xhr.get(queryURL, (err, response) => {
            console.log('xhr response', response);
            const data = JSON.parse(response.body);
            const notes = data.features;
            const total = data.total;
            this.setState({
                'notes': notes,
                'total': total,
                'loading': false
            });
        });
    },
    render: function() {
        console.log('rendering notes list');
        if (this.state.loading) {
            return (
                <Loading />
            );
        }
        if (this.state.notes.length === 0) {
            return (
                <NoResults />
            );
        }
        let notesHTML = [];
        this.state.notes.forEach(function(note) {
            let elem = (
                <NotesListItem note={note} key={note.properties.id} />
            );
            notesHTML.push(elem);
        });
        return (
           <div className='clearfix pad4y limiter' id="notes">
               {notesHTML}
           </div>
        );
        //         <div className='clearfix box round pad2'>
        //             <div className="">
        //                 <div className="col8 row2">
        //                     <div className="row1">
        //                         <div className="col3">
        //                             <h3 className="fancy"><a href="#">Note: 82</a></h3>
        //                         </div>
        //                         <div className="col2 pad0y">
        //                             <a className="button short fill-red" href="">Closed</a> 
        //                         </div>
        //                     </div>
        //                     <div className="row1">
        //                         <a className="icon account" href="#">geohacker</a> | 
        //                         <a className="icon time" href="#">December 8, 2015</a> |
        //                         <a className="icon contact"href="">5</a> |
        //                         <a className="icon crosshair" href="#">JOSM</a>
        //                     </div>
        //                     <div className="row4 pad1y">
        //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. 
        //                     </div>
        //                 </div>
        //                 <div className="col4 clip">
        //                     <img src="css/map.png" />
        //                 </div>
        //             </div>
        //         </div>            
        //     </div>      
        // );
        // // if (this.state.loading) {
        //     return (
        //         <Loading />
        //     );
        // }
        // if (this.state.notes.length === 0) {
        //     return (
        //         <NoResults />
        //     );
        // }
        // let notesHTML = [];
        // this.state.notes.forEach(function(note) {
        //     // console.log('note', note);
        //     // let elem = (
        //     //     <div key={note.properties.id}>
        //     //         <Link to={'/notes/' + note.properties.id}>
        //     //             {note.properties.id}
        //     //         </Link>
        //     //     </div>
        //     // );
        //     let elem = (
        //         <NotesListItem note={note} key={note.properties.id} />
        //     );
        //     notesHTML.push(elem);
        // });
        // // console.log('notesHTML', notesHTML);
        // return (
        //     <div>
        //         This is a notes list: <br /><br />
        //         {notesHTML}
        //     </div>
        // );
    }
});

export default NotesList;