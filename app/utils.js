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
                q.push(key + '=' + params[key]);
            }
        }
        return q.join('&');
    }
};

export default utils;