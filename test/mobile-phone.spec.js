var  MobilePhone = require('../').MobilePhone;

describe('MobilePhone', describeit);

function describeit(){
  it('Should return an error when mobile phone is not valid', invalidMobilePhone);
  it('Should not return an error when mobile phone is valid', validMobilePhone);
  it('Should return an error when mobile phone not start with +', invalidMobilePhoneWithoutPlusSign);
}


function invalidMobilePhone(){
  var errors = new MobilePhone().match('+9230012345678');
  errors.should.be.an.instanceOf(Array);
  errors.length.should.equal(1);
}

function validMobilePhone(){
  var errors = new MobilePhone().match('+923001234567');
  errors.should.be.an.instanceOf(Array);
  errors.length.should.equal(0);
}

function invalidMobilePhoneWithoutPlusSign(){
  var errors = new MobilePhone().match('923001234567');
  errors.should.be.an.instanceOf(Array);
  errors.length.should.equal(1);
}
