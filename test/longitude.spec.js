var Longitude = require('../').Longitude;

describe('Longitude', describeit);

function describeit(){
    it('Should return an error when longitude is not a number', notANumber);
    it('Should return an error when longitude is > 180', greaterThan180);
    it('Should return an error when longitude is < -180', lessThan180);
    it('Should parse a numeric string when parse option is true', shouldParse);
}





function notANumber(){
    var errors = new Longitude().match('2');
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('longitude should be a number');
}





function greaterThan180(){
    var errors = new Longitude().match(181);
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('longitude should be between -180 and 180');
}





function lessThan180(){
    var errors = new Longitude().match(-181);
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
    errors[0].message.should.equal('longitude should be between -180 and 180');
}





function shouldParse(){
    var errors = new Longitude({parse: true}).match('125.456');
    errors.length.should.equal(0);
}