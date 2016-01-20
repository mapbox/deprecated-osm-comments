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
 
    openAboutModal: function(e) {
        if (e) e.preventDefault();
        this.setState({aboutModalIsOpen: true});
    },
 
    closeAboutModal: function(e) {
        if (e) e.preventDefault();
        this.setState({aboutModalIsOpen: false});
    },

    render: function() {
        return (
            <div>
                <header className="col12 pad2y fill-navy-dark clearfix">
                    <div className="limiter contain dark">
                        <a className="inline mb-logo" href=".">Mapbox</a>
                    </div>
                    <div className="limiter contain">
                        <a href="" onClick={this.openAboutModal}>About</a>
                    </div>
                </header>
                <Modal
                    isOpen={this.state.aboutModalIsOpen}
                    onRequestClose={this.closeAboutModal}
                    style={modalStyle}
                    >
                    
                    <span className="icon close pin-right pad1" href="" onClick={this.closeAboutModal}></span> 

                    <h2>About</h2>
                        <p>
                            OSM Comments was developed to help the Mapbox Data Team track conversations 
                            in OpenStreetMap. And it's built for anyone to search notes and changeset 
                            discussions involving any OpenStreetMap user.
                        </p>
                        <p>
                            Add "users:" in the search bar to find other discussions. 
                            For example, "users:geohacker,Planemad" will find notes and 
                            changeset discussions only for these users.
                        </p>
                        <p>
                            Read more on <a href="https://www.mapbox.com/blog/osm-comments/" target="_blank">our blog</a>.
                        </p>
                        <p>
                            <a href="http://www.openstreetmap.org/copyright" target="_blank">
                                Data © OpenStreetMap contributors
                            </a>
                            <br />
                            Code on <a href="https://github.com/mapbox/osm-comments" target="_blank">GitHub</a>
                        </p>
 
                </Modal>
            </div>
        )
    }
});

export default Header;