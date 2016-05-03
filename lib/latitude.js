var s   = require('strummer');
var is  = require('is_js');





function initialize(opts){
    this.opts = opts || {};
}





function match(path, value){
    if(this.opts.parse)
        value = parseFloat(value);
    if(!is.number(value)) return 'latitude should be a number';
    if(value > 90 || value < -90) return 'latitude should be between -90 and 90';
}





module.exports = s.createMatcher({initialize: initialize, match: match});