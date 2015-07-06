var s  = require('strummer');
var is = require('is_js');

module.exports = s.createMatcher({match: match});

function match(path, value){
    if(!is.email(value)) {
        return 'Should be a valid email address.';
    }
}
