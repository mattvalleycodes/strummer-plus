var DateString  = require('../').DateString;


describe('DateString', describeIt);


function describeIt() {
    it('Should return validation error if date string is invalid', invalidDateString);
    it('Should not return validation error if date string is valid', validDateString);
}


function invalidDateString() {
    var errors = new DateString().match('nondatestring');
    errors.should.be.instanceOf(Array);
    errors.length.should.be.equal(1);
}


function validDateString() {
    var errors = new DateString().match('2013-02-08 09:30:26');
    errors.should.be.instanceOf(Array);
    errors.length.should.be.equal(0);
}
