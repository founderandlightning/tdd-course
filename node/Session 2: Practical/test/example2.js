const {
    assert
} = require('chai');
const { describe, it } = require('mocha');

describe('Test foo', () => {
    it('should pass test cases', () => {
        assert.equal('hi', returnHi());
    })
    it('should not pass test cases', () => {
        assert.equal('hi', returnHello());
    })
})

function returnHi() {
    return 'hi';
}

function returnHello() {
    return 'hello'
}