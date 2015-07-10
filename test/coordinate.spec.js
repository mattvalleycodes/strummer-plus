var  Coordinates = require('../').Coordinates;

describe('Coordinates', describeIt);

function describeIt(){
    var matcher = new Coordinates();




    it('Should return an error when value is not an array', function(){
        var errors = matcher.match(190);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('should be an array');
    });





    it('Should return an error when array has more than two items', function(){
        var errors = matcher.match([1,2,3]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('should be an array with exactly two members');
    });





    it('Should return an error when array has less than two items', function(){
        var errors = matcher.match([1]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('should be an array with exactly two members');
    });





    it('Should return an error when longitude is not number', function(){
        var errors = matcher.match(['2', 2]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('longitude should be a number');
    });





    it('Should return an error when latitude is not number', function(){
        var errors = matcher.match([1, '2']);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('latitude should be a number');
    });





    it('Should return an error when longitude is > 180', function(){
        var errors = matcher.match([180.5, 2]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('longitude should be between -180 and 180');
    });





    it('Should return an error when longitude is < 180', function(){
        var errors = matcher.match([-180.5, 2]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('longitude should be between -180 and 180');
    });





    it('Should return an error when latitude is > 90', function(){
        var errors = matcher.match([120, 91.2]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('latitude should be between -90 and 90');
    });





    it('Should return an error when latitude is < 90', function(){
        var errors = matcher.match([-91, -92]);
        errors.should.be.an.instanceOf(Array);
        errors.length.should.equal(1);
        errors[0].message.should.equal('latitude should be between -90 and 90');
    });





    it('Should not return an error when coordinates are valid', function(){
    });
}
