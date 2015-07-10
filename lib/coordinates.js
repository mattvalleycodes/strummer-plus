var s = require('strummer');
var is = require('is_js');

module.exports = s.createMatcher({match: match});





function match(path, value){
    if(!is.array(value))  return 'should be an array';
    if(value.length != 2) return 'should be an array with exactly two members';

    longitude = value[0];
    latitude  = value[1];

    if(!is.number(longitude)) return 'longitude should be a number';
    if(!is.number(latitude))  return 'latitude should be a number';

    if(longitude > 180 || longitude < -180) return 'longitude should be between -180 and 180';
    if(latitude > 90 || latitude < -90)     return 'latitude should be between -90 and 90';
}
