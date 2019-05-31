# TDD Session 2
In this session, we are going to discuss few important things at beginner level including benifits of writing unit test, configure and write unit test with popular testing framework along with the introduction of TDD.


### Focus Points
- Introduction, Benefits of writing unit test on your project.
- Configure suitable testing framework for your NODEJS project.
- Examples of **Unit Testing**

<hr/>

### Introduction of TDD, Unit Test

**TDD** : **T**est **D**riven **D**evelopment is an innovative software development approach/process where tests are written, before writing the minimum of code required for the test to be fulfilled. 

**Unit Testing** : Unit Testing is a level of software testing where individual units/components of a software are tested through testing framework.

#### Benifits of writing Unit Testing
- Improve quality of code
- Finds software bugs early
- Provides documentation of application
- More confident when you refactor

<hr/>

### Popular Testing Frameworks for nodejs
- **Mocha :** Mocha is very popular and core testing framework for nodejs. This framework provide basic structure, functions and assertion which are required while writing unit test.

<p>&nbsp; &nbsp; Official website: https://mochajs.org/ </p>



<p>&nbsp; &nbsp; Installation: </p>

```sh
npm Install mocha --save-dev //install package as dev dependency or
npm Install mocha --g //install package globally

```

- **Chai :** Chai is BDD/TDD assertions library for nodejs and browser. Its provides natural language assertions with elegant and readable style. 

<p>&nbsp; &nbsp; Official website: https://www.chaijs.com/</p>


<p>&nbsp; &nbsp; Installation: </p>

```sh
npm Install chai --save-dev //install package as dev dependency or
npm Install chai --g //install package globally

```


<hr/>


### Configure Chai and Mocha on nodejs project.
- Configure `package.json` file.(Add **test** command (you can choose as per your choice eg. test-app etc) inside scripts section and set value as **mocha**)
```sh
"scripts": {
    "test": "mocha"
  }

```
- Create folder **test** under your project directory

<hr/>

### Practical Example 1
Write a simple structure for Unit Test

- Create **app.js** (or any other name) inside test directory & include chai and mocha like below.

```sh
const { assert } = require('chai');
const { describe, it } = require('mocha');

```
- Write basic structure like below.
```sh
describe('Test suites title', function() {
    it('test case title', function() {
       
    })
    it('test case title2', function() {
       
    })
})
```
&nbsp; &nbsp; &nbsp; **describe**: Commonly known as test suites, which contains test cases. One suites case can have multiple test cases and multiple suites. 

&nbsp; &nbsp; &nbsp; **it** : This is consider as test case. Normally, its validate the particular unit of code. 


<hr/>

### Practical Example 2

Write two test cases, one should pass and another should not pass.


```sh
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
    
```
- Type `npm run test` from your terminal and you will see above test cases will failed.


<hr/>

### Practical Example 3

Write a unit test it should validate your sum function that has been defined on external file `app.js`.

**app.js**

```sh

const sum = (value1, value2) => {
    return value1 + value2;
};
module.exports = {
    sum
}

```
**test/app.js**

```sh
const { assert } = require('chai');
const { describe, it } = require('mocha');

const app = require('../app');

describe('Example 3', function() {
    it('should sum value', function() {
        assert.equal(app.sum(2, 4), 6);
    })
 })

```
- Type `npm run test` from terminal. You will see above test cases will pass.


<hr/>

### Practical Example 4
Write a query builder function and test cases to validate following capabilities of query builder.
1. Generate sql query to **select all the columns** from specific table if columns doesn't defined.
**app.js**

```
const getSqlQuery = (table, columns = []) => {
    const selectColumns = columns.length > 0 ? '' : '*';
    return `select ${selectColumns} from ${table}`;
}
module.exports = {
    getSqlQuery,
}
```
**test/app.js**

```
const { assert } = require('chai');
const { describe, it } = require('mocha');
const { getSqlQuery, trimString } = require('../app');
describe('Sql Query Builder', () => {
    it('should select all columns from specific table if columns not mentioned.', () => {
        assert.equal('select * from users', getSqlQuery('users'));
    })
```

2. Select **specific columns** from specified table name.

**app.js**

```
const getSqlQuery = (table, columns = []) => {
   const selectColumns = columns.length > 0 ? columns.join(', ') : '*';
    return `select ${selectColumns} from ${table}`;
}
module.exports = {
    getSqlQuery,
}
```
**test/app.js**
```
    it('should select columns from specific table', () => {
        assert.equal('select name, id from users', getSqlQuery('users', ['name', 'id']));
    })
```

3. Should be able to add single **where condition**.

**app.js**

```
const getSqlQuery = (table, columns = [], where = []) => {
   const selectColumns = columns.length > 0 ? columns.join(', ') : '*';
    const whereConditions = where.length > 0 ? ` where ${Object.keys(where[0])[0]}=${where[0][Object.keys(where[0])]}` : '';
    return `select ${selectColumns} from ${table}${whereConditions}`;
}
```
**test/app.js**
```
     it('should be able to add single where conditions', () => {
        assert.equal('select * from users where email=abc@gmail.com', getSqlQuery('users', [], [{
            'email': 'abc@gmail.com'
        }]));
    })
```

4. Should be able to manage **multiple where conditions**.

**app.js**

```
const getSqlQuery = (table, columns = [], where = []) => {
    const selectColumns = columns.length > 0 ? columns.join(', ') : '*';
    const whereConditions = where.reduce((acc, data, index) => {
        const key = Object.keys(data)[0];
        const dynamicCondition = `${Object.keys(data)[0]}=${data[key]} `;
        const clause = index == 0 ? ` where ` : ` and `;
        return acc += clause + dynamicCondition;
    }, '');
    return `select ${selectColumns} from ${table}${whereConditions}`;
}
```

**test/app.js**

```
    it('should be able to manage multiple where conditions', () => {
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
```

<hr/>


### Homework




Add following more functionalities/capabilities to existing query builder on **example4.js**

1. Generate a select query to select specific columns from a table, with order by on a column

&nbsp; &nbsp; **Acceptance Creteria:** The table name is `products` and the columns required to be fetched are `id` and `name` and sorted as descending by `id`.

2. Generate a select query to select all columns from table with order by multiple columns

&nbsp; &nbsp; **Acceptance Creteria:** The table name is `products` and the columns required to be ordered are `name` and `category` and sorted as ascending by `name` and `category`.

3. Generate a select query to select specific columns from a table, with order by on a column - with capitalized keywords, and correct spacings.

&nbsp; &nbsp; **Acceptance Creteria:** The table name is `products` and the columns required to be fetched are `id` and `name` and sorted as descending by `id` with capitalized keywords like `SELECT`, `FROM`, `ORDER BY`

4. Should be able to add **limit**.

&nbsp; &nbsp; **Acceptance Criteria:** If your table is `users` you want to fetch only 10 results from `users` table.

5. Generate a query that limits the result from `products` table to 6 and `offset` is 5

&nbsp; &nbsp; **Acceptance Criteria:** Your table is `products` you want to fetch only 6 results from products table skipping the first 5 results.

6. Generate a select query to get all the columns of table with a count column that give the total number of products

&nbsp; &nbsp; **Acceptance Criteria:** Your table is `products` and you want to fetch all the columns of `products` tables along with the toal number of products.

7. Generate a select query to get the product with maximum cost

&nbsp; &nbsp; **Acceptance Criteria:** Your table is `products` and you want to fetch a product from the table that has maximum cost.

8. Generate a select query to get the cost of products with group by

&nbsp; &nbsp; **Acceptance Criteria:** Your table is `products` and you want to get the unique values of cost which can be done by `group by`.

9. Generate a query to get all the unique products in the table

&nbsp; &nbsp; *Acceptance Criteria:** Your table is `products` and you want to get all the unique products of the table using `DISTINCT` name.

10. Generate a query with a table joined with other table

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to join `products` table with `categories` table.

11. Generate an insert query to insert a row with name, cost, color

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to `insert` a row with values into `name`, `age` and `color`.

12. Generate an insert query to insert multiple rows of values with column : name, cost and color.

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to insert 3 rows with values into `name`, `age` and `color`.

13. Generate an insert query to insert a row with name and cost and default color as red.

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to insert a rows with values into `name`, `age` and default value of color as red.

14. Generate an update query to update a row of `products` with `where` condition on the name of product

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to update a row with `name` apple to orange.

15. Generate an update query to update all the products color to black whose color is red

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to update all the rows of table whose color is red to black.

16. Generate an update query to update the cost of products to their default value of 100.

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to update all the cost of `products` to the default cost of 100.

17. Generate an update query to update all the `products` color to pink

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to update all the cost of `products` to the default cost of 100.

18. Generate a delete query to delete the product whose name is abc

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to delete a product with `name` abc.

19. Generate a delete query to delete the products whose cost is greater than 500

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to delete all the `products` whose cost is greater than 500.

20. Generate a delete query to delete all the products

&nbsp; &nbsp; **Acceptance Criteria:** The main table is `products` and you want to `delete` all the products.


<hr/>

### Instructions while writing Unit Test
- No if condition in test case
- Never write code before unit test
- Test should be independent
- Use different database for testing

Thanks.
