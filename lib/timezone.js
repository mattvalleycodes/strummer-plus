var s       = require('strummer');
var moment  = require('moment-timezone');


function match(path, value) {
    var timezones = moment.tz.names();

    if (timezones.indexOf(value) === -1) {
        return 'should be a valid timezone';
    }
}


module.exports = s.createMatcher({match: match});