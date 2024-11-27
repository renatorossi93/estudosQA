const chai = require('chai')
assert = chai.assert
expect = chai.expect
should = chai.should()

descripe('string', function () {

    before(function () {
        //runs once before the first test in this block
        console.log('before hook')
    });

    after(function () {
        //runs once after the last test in this block
        console.log('after hookç')
    });

    beforeEach(function () {
        //runs before each test in this block
        console.log('beforeEach hook')
    });

    afterEach(function () {
        //runs after each test in this block
        console.log('afterEach hook')
    });

    let name = 'Renato'
    it('should be of type string', function () {
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
    })

    it('should contain Renato', function () {
        name.should.not.equal('Athena')
        name.should.equal('Renato')
        expect(name).to.equal('Rento')//geralmente tipagem usada em  BDD
        assert.equal(name, 'Renato')//geralmente tipagem usada em TDD
    })
})