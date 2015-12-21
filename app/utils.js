import moment from 'moment';

const utils = {
    formatDate: function(timestamp) {
        if (!timestamp) return '-';
        return moment(new Date(timestamp)).format('Do MMM, YYYY');
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
            'users': ['planemad, andygol'],
            'text': 'foobar'
        }
    */
    getQueryComponents: function(queryText) {
        var parts = queryText.split(' ');
        var ret = {};
        var words = [];
        parts.forEach(function(part) {
            var split = part.split(':');
            if (split.length > 1) {
                var key = split[0];
                var value = split[1];
                if (key === 'users') {
                    ret.users = value.split(',');
                }
            } else {
                words.push(part);
            }
        });
        ret.text = words.join(' ');
        return ret;
    }
};

export default utils;