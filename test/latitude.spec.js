var Latitude = require('../').Latitude;

describe('Latitude', describeit);

function describeit(){
    it('Should return an error when latitude is not a number', notANumber);
    it('Should return an error when latitude is > 90', greaterThan90);
    it('Should return an error when latitude is < -90', lessThan90);
    it('Should parse a numeric string when parse option is true', shouldParse);
}





function notANumber(){
    var errors = new Latitude().match('2');
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('latitude should be a number');
}





function greaterThan90(){
    var errors = new Latitude().match(91);
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('latitude should be between -90 and 90');
}





function lessThan90(){
    var errors = new Latitude().match(-91);
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('latitude should be between -90 and 90');
}





function shouldParse(){
    var errors = new Latitude({parse: true}).match('89.456');
    errors.length.should.equal(0);
}