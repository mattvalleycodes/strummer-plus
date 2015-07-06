var s          = require('strummer');
var matcher    = new RegExp('^[0-9a-fA-F]{24}$');

module.exports = s.createMatcher({match: match});




function match(path, value){
    if(matcher.test(value) === false) {
        return 'should be a valid ObjectId';
    }
}
