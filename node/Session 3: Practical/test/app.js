const { describe, it } = require('mocha');
var assert = require('assert');
const { createUser } = require('./../services/users');

describe('Users Registration', async () => {
    it('Create User', async () => {
        const userInfo = await createUser({
            'email': 'sharmanarayan1991@gmail.com',
            'firstName': 'narayan',
            'lastName': 'sharma'
        });
        assert.ok(userInfo);
    })
})