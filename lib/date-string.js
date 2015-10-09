var s = require('strummer');


function match(path, value) {
    if (isNaN(Date.parse(value))) {
        return 'should be a valid date string';
    }
}


module.exports = s.createMatcher({match: match});