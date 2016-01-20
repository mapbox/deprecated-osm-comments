import React, {Component} from 'react';
// import Map from './Map';
import NavBar from '../containers/NavBar';
import ContentContainer from '../containers/Content';
import ChangesetsList from './ChangesetsList';
import Header from './Header';

var App = React.createClass({
    render: function() {
        if (!this.props.children) {
            var child = (<ChangesetsList />);
        } else {
            var child = this.props.children;
        }
        return (
            <div className="app-container">
                <Header />
                <NavBar location={this.props.location} />
                <ContentContainer ref="contentContainer" child={child} />
            </div>
        );
    }
});

export default App;