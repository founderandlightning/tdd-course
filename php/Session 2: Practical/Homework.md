Create a query builder with following capabilities in the order specified, with a commit per task:

1. **Generate a select query to select all columns from a table.**

*Acceptance Criteria :*

If the table name is `products`, then the assertion should look something like:

```$this->assertEquals('select * from products', $sql->select('products'))```

2. **Generate a select query to select specific columns from a table.**

*Acceptance Criteria :*

The table name is `products` and the columns required to be fetched are `id` and `name`.

```$this->assertEquals('select id, name from products', $sql->select('products', ['id', 'name']))```

3. **Generate a select query to select specific columns from a table, with order by on a column**

*Acceptance Criteria :*

The table name is `products` and the columns required to be fetched are `id` and `name` and sorted as descending by `id`.

```$this->assertEquals('select id, name from products order by id desc', $sql->select('products', ['id', 'name'], ['id', 'desc']))```

4. **Generate a select query to select all columns from table with order by multiple columns**

*Acceptance Criteria :*

The table name is `products` and the columns required to be ordered are `name` and `category` and sorted as ascending by `name` and `category`.


```$this->assertEquals('select * from products order by name asc, category asc', $sql->select('products', [['name', 'asc'],['category','asc']]))```

5. **Generate a select query to select specific columns from a table, with order by on a column - with capitalized keywords, and correct spacings.**

*Acceptance Criteria :*

The table name is `products` and the columns required to be fetched are `id` and `name` and sorted as descending by `id` with capitalized keywords like SELECT, FROM, ORDER BY

```$this->assertEquals('SELECT id, name FROM products ORDER BY id DESC', $sql->select('products', ['id', 'name'], ['id', 'DESC']))```

6. **Generate a query that limits the result from products table to 10.**

*Acceptance Criteria :*

Your table is `products` you want to fetch only 10 results from products table.

```$this->assertEquals('select * from products limit 10', $sql->select('products', 10))```

7. **Generate a query that limits the result from products table to 6 and offset is 5.**

*Acceptance Criteria :*

Your table is `products` you want to fetch only 6 results from products table skipping the first 5 results.

```$this->assertEquals('select * from products limit 6 offset 5', $sql->select('products', [6, 5]))```

8. **Generate a select query to get all the columns of table with a count column that give the total number of products.**

*Acceptance Criteria :*

Your table is `products` and you want to fetch all the columns of products along with the total number of products.

```$this->assertEquals('select *, count("id") from products', $sql->select('products', ['count','id']))```

9. **Generate a select query to get the product with maximum cost**

*Acceptance Criteria :*

Your table is `products` and you want to fetch a product from the table that has maximum cost.

```$this->assertEquals('select max('cost') from products', $sql->select('products', ['max','cost']))```

10. **Generate a select query to get the cost of products with group by**

*Acceptance Criteria :*

Your table is `products` and you want to get the unique values of cost which can be done by group by.

```$this->assertEquals('select max('cost') from products group by cost', $sql->select('products', ['group by','cost']))```

11. **Generate a query to get all the unique products in the table**

*Acceptance Criteria :*

Your table is `products` and you want to get all the unique products of the table using DISTINCT name.

```$this->assertEquals('select DISTINCT 'name' from products', $sql->select('products', ['DISTINCT','name']))```


12. **Generate a query with a table joined with other table**

 *Acceptance Criteria :*

The main table is `products` and you want to join `products` table with `categories` table.

```$this->assertEquals('select * from products join categories on products.category_id=categories.id', $sql->select('products', 'categories', ['id', 'category_id']))```

13. **Generate an insert query to insert a row with name, cost, color**

 *Acceptance Criteria :*

The main table is `products` and you want to insert a row with values into `name`, `cost` and `color`.

```$this->assertEquals('INSERT INTO products("id","name", "cost", "color") VALUES(1,"apple", 100, "red")', $sql->insert('products', ["id","name","cost","color"], [1, "apple", 100, "red"]))```

14. **Generate an insert query to insert multiple rows of values with column : name, cost and color.**

*Acceptance Criteria :*

The main table is `products` and you want to insert 3 rows with values into `name`, `cost` and `color`.

```$this->assertEquals('INSERT INTO products("id","name", "cost", "color") VALUES(1,"apple", 100, "red"), (2, "orange", 50, "orange")', $sql->insert('products', ["id","name","cost","color"], [[1, "apple", 100, "red"],[1, "orange", 100, "orange"]] ))```

15. **Generate an insert query to insert a row with name and cost and default color as red.**

*Acceptance Criteria :*

The main table is `products` and you want to insert a rows with values into ' `id`,`name`, `cost` and default value of `color` as red.

```$this->assertEquals('INSERT INTO products("id","name", "cost", "color") VALUES(1,"apple", 100, DEFAULT)', $sql->insert('products', ["id","name","cost","color"], [1, "apple", 100, DEFAULT]))```

16. **Generate an update query to update a row of products with where condition on the name of product**

*Acceptance Criteria :*

The main table is `products` and you want to update a row with `name` apple to orange.

```$this->assertEquals('UPDATE products SET cost=200 WHERE name = "apple"', $sql->update('products', ["cost",200], ["name", "apple"]))```

17. **Generate an update query to update all the products color to black whose color is red**

*Acceptance Criteria :*

The main table is `products` and you want to update all the rows of table whose color is red to black.

```$this->assertEquals('UPDATE products SET color="black" WHERE color = "red"', $sql->update('products', ["color", "black"], ["color", "red"]))```

18. **Generate an update query to update the cost of products to their default value of 100.**

*Acceptance Criteria :*

The main table is `products` and you want to update all the cost of products to the default cost of 100.

```$this->assertEquals('UPDATE products SET cost=DEFAULT WHERE cost = 100', $sql->update('products', ["cost", DEFAULT], ["cost", 100]))```

19. **Generate an update query to update all the products color to pink**

*Acceptance Criteria :*

The main table is `products` and you want to update all the cost of products to the default cost of 100.


```$this->assertEquals('UPDATE products SET cost=DEFAULT WHERE cost = 100', $sql->update('products', ["cost", DEFAULT], ["cost", 100]))```

20. **Generate a delete query to delete the product whose name is abc**

*Acceptance Criteria :*

The main table is `products` and you want to delete a product with name abc.

```$this->assertEquals('DELETE FROM products WHERE name="abc"', $sql->delete('products', ["name", "abc"]))```

21. **Generate a delete query to delete the products whose cost is greater than 500**

*Acceptance Criteria :*

The main table is `products` and you want to delete all the products whose cost is greater than 500.

```$this->assertEquals('DELETE FROM products WHERE cost>500', $sql->delete('products', ["cost", ">", 100]))```

22. **Generate a delete query to delete all the products**

*Acceptance Criteria :*

The main table is `products` and you want to delete all the products.

```$this->assertEquals('DELETE FROM products', $sql->delete('products'))```