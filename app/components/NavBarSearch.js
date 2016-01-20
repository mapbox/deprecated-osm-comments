import React from 'react';
import {History} from 'react-router';
import utils from '../utils';

var NavBarSearch = React.createClass({
    mixins: [History],
    getInitialState: function() {
        return {value: this.props.query['q'] || ''};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({ value: newProps.query['q'] || ''});
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    doneTyping: function(event) {
        if (event.charCode == 13 || event.constructor.name == "SyntheticFocusEvent") {
            var query = utils.getQueryString( Object.assign({}, this.props.query, {q: this.state.value}) );
            this.history.pushState(null, this.props.location + '?' + query);
        }
    },
    render: function() {
        return (
                <div className="pad0y pin-right">
                    <fieldset className='with-icon'>
                        <span className='icon search'></span>
                        <input id='users' type='text' className='round' value={ this.state.value } onChange={this.handleChange} onKeyPress={this.doneTyping} onBlur={this.doneTyping}/>
                    </fieldset>
                </div>
        );
    }
});

export default NavBarSearch;