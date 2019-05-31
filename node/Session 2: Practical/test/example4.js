const {
    assert
} = require('chai');
const { describe, it } = require('mocha');

const { getSqlQuery, trimString } = require('../app');

describe('Sql Query Builder', () => {
    it('String should trim and remove duplicate space', () => {
        const text = trimString('narayan    sharma ')
        assert.equal('narayan sharma', text);
    })
    it('should select columns from specific table', () => {
        const sql = getSqlQuery('users', ['name', 'id']);
        assert.equal('select name, id from users', sql);
    })
    it('should select all columns from specific table if columns not mentioned.', () => {
        assert.equal('select * from users', getSqlQuery('users'));
    })
    it('should able to add single where conditions', () => {
        const sql = getSqlQuery('users', [], [{
            'email': 'abc@gmail.com'
        }]);
        assert.equal('select * from users where email=abc@gmail.com', sql);
    })
    it('should able to manage multiple where conditions', () => {
        const sql = getSqlQuery('users', [],
            [
                {
                    'email': 'abc@gmail.com',
                },
                {
                    'user_type_id': 1
                }
            ]
        );
        assert.equal('select * from users where email=abc@gmail.com and user_type_id=1', sql);
    })
})
