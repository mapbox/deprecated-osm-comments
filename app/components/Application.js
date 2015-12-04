import React, {Component} from 'react';
import Map from './Map';
import ContentContainer from '../containers/Content';


var App = React.createClass({
    componentDidMount: function() {
        console.log('app component did mount. much wow');
    },

    componentWillReceiveProps: function(newProps) {
        console.log('app container will receive props', arguments);
        console.log('thisProps', this.props.params);
        console.log('thisState', this.state);
        console.log('just this', this);
        console.log('app children', this.props.children);
    },

    // getSelected: function() {
    //     var pathname = this.props.location.pathname;
    //     var pathSplit = pathname.split('/');
    //     var selected = 'notes';
    //     if (pathSplit.length > 1 && pathSplit[1] !== '') {
    //         selected = pathSplit[1];
    //     }
    //     return selected;        
    // },

    // getViewType: function() {
    //     var viewType = 'list';
    //     var pathname = this.props.location.pathname;
    //     var pathSplit = pathname.split('/');
    //     console.log('view type path split', pathSplit);
    //     if (pathSplit.length > 2 && pathSplit[2] !== '') {
    //         viewType = 'detail';
    //     }
    //     return viewType;
    // },

    render: function() {
        // var selected = this.getSelected();
        // var viewType = this.getViewType();
        // var params;
        // console.log('app props', this.props);
        // if (viewType === 'list') {
        //     params = this.props.location.query;
        // } else {
        //     params = this.props.id;
        // }
        // console.log('selected in app', selected);
        return (
            <div className="app-container">
                <Map ref="map" />
                <ContentContainer ref="contentContainer" child={this.props.children} />
            </div>
        );
    }
});

export default App;