import moment from 'moment';
import tokenizer from './lib/tokenizer';

const utils = {
    formatDate: function(timestamp) {
        if (!timestamp) return '-';
        // return moment(new Date(timestamp)).format('Do MMM, YYYY');
        return moment(new Date(timestamp)).fromNow();
    },
    getQueryString: function(params) {
        var q = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                q.push(key + '=' + encodeURI(params[key]));
            }
        }
        return q.join('&');
    },


    /*
        Function to parse out components from a query string
        eg.
        >>>getQueryComponents('users:planemad,andygol foobar');
        >>>{
            'users': 'planemad,andygol'],
            'text': 'foobar'
        }
    */
    getQueryComponents: function(queryText) {
        var tokens = tokenizer(queryText);
        var ret = {};
        var words = [];
        tokens.forEach(function(token) {
            if (token.hasOwnProperty('tag')) {
                ret[token.tag] = token.term;
            } else {
                words.push(token.term.trim());
            }
        });
        ret.text = words.join(' ');
        return ret;
    }
};

export default utils;