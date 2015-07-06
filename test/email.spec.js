var  Email = require('../').Email;

describe('Email', describeit);

function describeit(){
    it('Should return an error when email is not valid', invalidEmail);
    it('Should not return an error when email is valid', validEmail);
}


function invalidEmail(){
    var errors = new Email().match('hi@bye');
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
}

function validEmail(){
    var errors = new Email().match('hi@bye.com.au');
    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(0);
}
