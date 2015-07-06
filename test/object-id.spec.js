var ObjectId = require('../').ObjectId;

describe('ObjectId', describeit);

function describeit(){
    it('Should return an error when ObjectId is not valud', invalidObjectId);
    it('Should not return an error when ObjectId is valid', validObjectId);
};

function invalidObjectId(){
    errors = new ObjectId().match('invalid_object_id');

    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(1);
}

function validObjectId(){
    errors = new ObjectId().match('559a80d56602de22f3e5ef07');

    errors.should.be.an.instanceOf(Array);
    errors.length.should.equal(0);
}
