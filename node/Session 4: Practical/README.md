# TDD Session 4
In this session, we are going to discuss to setup test env in node and create test cases along with database(including fixtures and migrations).

## Focus Points
- Review previous session
- Setup test environment
- Run migrations before test case
- Insert data using fixtures
- Unit test with DB interaction and fixtures
- Homework/Assignments

<hr />

## Review previous session
You all are requested to have a look into previous session questions and complete homework before going to start session three. Apart from this make sure you should know about few important concepts from previous session. 
- What is TDD and Unit Test?
- What are assertions?
- what are the benefits of validating your logic using the unit test?
- What are the popular nodejs frameworks for unit test?

<hr />

## Setup test env
 Node js allow you to setup env through the script. When you are working on real time application there must be different env like `Development`, `Production/Staging` and `Test`. There would be different database for each env. So before run the test we need to setup test env. But `cross-env` package is required to setup it.
 
 We can do it just by creating a test command in `Package.json` file.
 ```{
  "name": "api",
  "scripts": {
       "test": "cross-env-shell NODE_ENV=test"
  }
  "devDependencies": {
    "cross-env": "^5.1.6"
    }
 ```
 
## Run migrations before test case
 Migrations (also known as ‘schema evolution’ or ‘mutations’) are a way of changing your database schema from one version into another.
 Before executing test, migrations should be run so it can setup fresh database schema. We can simple setup these commands in Package.json file 
 ```{
  "name": "api",
  "scripts": {
       "test": "cross-env-shell NODE_ENV=test \"sequelize db:migrate:undo:all && sequelize db:migrate && mocha --recursive --timeout 25000\"",
  }
 ```

## Insert data using fixtures
 We are going to use Postgresql database with Sequlize orm. Sequelize-fixtures is a simple lib to load data to database using sequelize. It is intended for easily setting up test data. Yaml and json formats are supported
 **Usage**
 ```{
   const sequelize_fixtures = require('sequelize-fixtures');
    //a map of [model name] : model
    const models = require('./models');
    
    //from file
    sequelize_fixtures.loadFile('fixtures/test_data.json', models).then(function(){
        doStuffAfterLoad();
    });
    
    //array of files
     sequelize_fixtures.loadFiles(['fixtures/users.json', 'fixtures/data*.json'], models).then(function(){
        doStuffAfterLoad();
    }
 ```
 
 ## Unit test with DB interaction and fixtures
 Lets assume that we want to unit test a creating user feature.
 So, here is the example, simplified service:
 ```
 const models= require('../models.js')
 
  async createAccount(user) {

   // Saves user to database and return created entity object
   return await models.user.create(user);
  } 
module.exports = { createAccount };

 ```
By now we are able to spy on method and check if is called properly, with correct params etc
 ```{
 const assert = require('assert');
 const { describe, it } = require('mocha');
 
 const userService = require('/userService');
 describe('/Users', () => {
 
  before(async () => {
    sequelize = await IntializeSequelize();
  });

  beforeEach(() => sequelize.truncate());
  
  //Load fixtures
  beforeEach(() =>
    sequelizeFixtures.loadFile(
      path.join(__dirname, '../fixtures/users.js'),
      sequelize.models,
      { log: () => {} },
    ));

  after(() => sequelize.close());
  
  it('Should create a user.', async () => {
  const USER = {
   email: 'test@user.com',
   username: 'user',
   password: 'user',   
  };
  const user =await userService.createAccount(USER);
       assert.deepEqual(
        ['email', 'username', 'password'].sort(),
        Object.keys(user).sort(),
      );
    });
});
 ```

<hr />



## Homework (Assignments)
- Store user information to database with fixtures and test env

&nbsp; &nbsp; **Acceptance Criteria**

    - There should be `State` table in which value should be 2 to 5 cities from fixture.
    - Columns name of `User` table should be `name`, `email`, `status` and `stateId` (`stateId` should be foriegn key relation with `State` table)
    - Add the model validation for unique `email`.
    - Try to insert same email as in fixture and validate the model validation.
    - Create a business logic to `active` the user if `active=false`.
    - Create a custom validation `UserAlreadyActive` and throw it in above function if user is already active
    -Validate this error in test case using `asser.Reject()`





    









