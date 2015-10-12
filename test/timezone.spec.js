var Timezone = require('../').Timezone;


describe('Timezone', describeIt);


function describeIt() {
    it('Should return validation error if timezone is invalid', invalidTimezone);
    it('Should not return validation error if timezone is valid', validTimezone);
}


function invalidTimezone() {
    var errors = new Timezone().match('Invalid/Timezone');
    errors.should.be.instanceOf(Array);
    errors.length.should.be.equal(1);
}


function validTimezone() {
    var errors = new Timezone().match('Australia/Brisbane');
    errors.should.be.instanceOf(Array);
    errors.length.should.be.equal(0);
}
