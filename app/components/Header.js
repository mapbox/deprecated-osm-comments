import React from 'react';
import Modal from 'react-modal';

var modalStyle = {
  overlay: {
    backgroundColor:'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  content: {
    background: '#fff',
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    padding: '20px',
    bottom: 'auto',
    width: '400px',
    border: 'none',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '3px',
    outline: 'none',
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

var Header = React.createClass({
    getInitialState: function() {
      return { aboutModalIsOpen: false };
    },
 
    openAboutModal: function() {
        this.setState({aboutModalIsOpen: true});
    },
 
    closeAboutModal: function() {
        this.setState({aboutModalIsOpen: false});
    },

    render: function() {
        return (
            <div>
                <header className="col12 pad2y fill-navy-dark clearfix">
                    <div className="limiter contain">
                        <a className="inline mb-logo" href=".">Mapbox</a>
                    </div>
                    <div className="limiter contain">
                        <button onClick={this.openAboutModal}>About</button>
                    </div>
                </header>
                <Modal
                    isOpen={this.state.aboutModalIsOpen}
                    onRequestClose={this.closeAboutModal}
                    style={modalStyle}
                    >
                    
                    <h2>About</h2>
                    <p>
                        OSM-Comments was developed as a way to keep track of conversations that
                        the Mapbox Data Team is having on OpenStreetMap.
                    </p>
                    <p>
                        However, the tool is open source and can be used to search 
                        for notes and changeset discussions pertaining to any OpenStreetMap user.
                    </p>
                    <p>
                        To search for your own notes / changeset discussions, 
                        type "users:&lt;user_name&gt;" in the search bar. 
                        You can add several usernames by comma separating them. 
                        For eg. try searching for "users:geohacker,PlaneMad" to retrieve notes 
                        and changeset discussions pertaining to users "geohacker" and "PlaneMad".
                    </p>
                    <button onClick={this.closeAboutModal}>close</button> 
 
                </Modal>
            </div>
        )
    }
});

export default Header;