import moment from 'moment';

const utils = {
    formatDate: function(timestamp) {
        return moment(timestamp).format('Do MMM, YYYY');
    }
};

export default utils;