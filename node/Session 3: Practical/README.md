# TDD Session 3
In this session, we are going to discuss few important things at intermediate level while writing unit test with real project.

## Focus Points
- Review previous session
- General terminologies in TDD
  - Fixtures
  - Faker
- More important assertions 
- Project setup
- Unit test with DB interaction
- Homework/Assignments

<hr />

## Review previous session
You all are requested to have a look into previous session questions and complete homework before going to start session three. Apart from this make sure you should know about few important concepts from previous session. 
- What is TDD and Unit Test?
- What are assertions?
- what are the benefits of validating your logic using the unit test?
- What are the popular nodejs frameworks for unit test?

<hr />

## General terminologies in TDD
**Fixtures** : A test fixture is a fixed state of a set of objects/data used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run.
**Uses of Fixtures**:
- Preparation of input data and setup/creation of fake or mock objects
- Loading a database with a specific, known set of data
- Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.

**Faker**:
Faker is a Python package that generates fake data for you. It will help you to bootstrap your database. 

**Use cases of Faker**: When building out applications, we will often need data to show off how it works. It won't be much of an application if all our tables are blank!

&nbsp; &nbsp; Often, when we first start building out an application, we don't want to worry too much about the data. Having to create a database and fill it with sample data like users is an annoying step that is just in the way of creating an amazing app.
<hr />

## Few important assertions
These are the few important assertions available on nodejs default package `assert`. 
- `assert.equal`: The assert.equal() method tests if two values are equal, using the == operator.
- `assert.notEqual`: The assert.notEqual() method tests if two values are not equal, using the == operator.
- `assert.strictEqual`: The assert.strictEqual() method tests if two values are equal, using the === operator.
- `assert.deepEqual`: The assert.deepEqual() method tests if two objects, and their child objects, are equal, using the == operator.
- `assert.throws`: The assert.throws() method tests if given expression throw exception or not. 
- `assert.ok`: The assert.ok() method tests if a given expression is true or not.

<hr />

**Project Setup**:
All of you are requested to do some project setup before attend session. Few of the things you should consider are given below.
- Create an express app having services(business logic) separately from routes.
- Configure the postgres database with the sequelize package.
- Create migration for the users' table having basic columns (email, firstName and lastName) using `sequelize cli` package.

The directory structure of your app should look like below.
![alt text](https://github.com/narayansharma91/repo_images/blob/master/node_sessions/project_structure.png)

<hr />

## Unit test with DB interaction
- Create user with firstName, lastName and email in database  (this script should be inside service folder)
```
services/user.js
const { User } = require('./../models/index');
const createUser = (data) => User.create(data)
module.exports = { createUser };
```
And validate your service method using unit test.
```
test/app.js
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
```
<hr />

## Homework (Assignments)
- Store user information to database

&nbsp; &nbsp; **Acceptance Criteria**

    - There should be `userTypes` table in which value should be (`admin` and `user`) (you can use seeder for now)
    - Columns name of `users` table should be `name`, `email` and `userTypeId` (`userTypeId` should be foriegn key relation with `userTypes` table)
    - User information which you are trying to store into the database should be `fake` information which is provided by `faker` library.
    - If I missed some columns value during store, It should be thrown exception and you should be handle proper assertion function to handle it.

- Get user information from database

&nbsp; &nbsp; **Acceptance Criteria**

    - If I pass correct user id to service function it should return user information.
    - If I pass incorrect user id to service function it should return exception and you should handle this using assertion function.


- Update user information to database

&nbsp; &nbsp; **Acceptance Criteria**

    - If I pass correct user id along with user information (which I want to update) to service function it should return user information.
    - If I pass incorrect user id along with user information (which I want to update) to service function it should return exception and you should handle this using assertion function.
    









