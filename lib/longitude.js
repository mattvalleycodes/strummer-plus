var s   = require('strummer');
var is  = require('is_js');





function match(path, value){
    if(!is.number(value)) return 'longitude should be a number';
    if(value > 180 || value < -180) return 'longitude should be between -180 and 180';
}





module.exports = s.createMatcher({match: match});