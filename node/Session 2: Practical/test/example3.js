const { assert } = require('chai');
const { describe, it } = require('mocha');

const app = require('../app');

describe('Example 3', function() {
    it('should sum value', function() {
        assert.equal(app.sum(2, 4), 6);
    })
 })
 