var s  = require('strummer');
var validator = require('validator');

module.exports = s.createMatcher({match: match});

function match(path, value){
    if(!validator.isMobilePhone(value)) {
        return 'Should be a valid mobile phone number.';
    }
}
