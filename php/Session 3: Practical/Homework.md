## Homework (Assignments)

Please do the tasks in the order specified with a commit per task. Also please follow Test-driven approach (tests before code).

Below are the tasks : 

1. **Create a test to see if the user get successfully created in the users table.**

 &nbsp; &nbsp; *Acceptance Criteria*

- User row should be created with factory user.
- Test should have following assertion and must pass it.

```
assertInstanceOf(User::class, $user);
```

2. **Create a test to verify the validation error of incorrect email while creating user.**

 &nbsp; &nbsp; *Acceptance Criteria*

- The user model should have the rule for email column of user
- Also if for input data, the validation fails, it should not save the user and should return the error in an array.
- Test should have following assertion and must pass it.

```
assertArrayHasKey('email', $user);
```

3. **Similar to the task 2, more validation need to be added like name to be unique, password should be minumum 6 and maximum 8 characters.**

 &nbsp; &nbsp; *Acceptance Criteria*

- Add the rules for both name and password.
- Both the tests created should have following assertions

```
assertArrayHasKey('name', $user);
assertArrayHasKey('password', $user);
```

4. **Create a test that used the output of other test as it's input.**

 &nbsp; &nbsp; *Acceptance Criteria*

- Use of annotation @depends
- Create a test to successfully create a user
- Use this user id of user in other test to create a product.

5. **Create a test to see if we can have it's dependency on 2 tests.**

 &nbsp; &nbsp; *Acceptance Criteria*

- Create a test A() and test B()
- Create test C() which have annotations @depends A and @depends B
- Validate with assertions

```
assertEqual('a', $a);
assertEqual('b', $b);
```

6. **Create a test to validate url with regular expression.**

 &nbsp; &nbsp; *Acceptance Criteria*

- There should be atleast 3 datasets of url to validate the url creating function.
- Create a dataProvider function with these datasets and use it in test function.
- The dataProvider function must be public.
- The dataProvider function must return an array or must be some iterator.
- The test using the data provider must have the annotation @dataProvider.

7. **Create a test which runs the code that throws the exception so as to use @expectedException**

 &nbsp; &nbsp; *Acceptance Criteria*

- The test must be preceded by `@expectedException InvalidArgumentException`
 or must contain `this->expectException(InvalidArgumentException::class);`
- The test must otherwise throw some exception.

8. **Create a test that uses @expectedException annotation but otherwise does not throw any exception**

 &nbsp; &nbsp; *Acceptance Criteria*
 
- The test must be preceded by `@expectedException InvalidArgumentException`
 or must contain `this->expectException(InvalidArgumentException::class);`
- The test must otherwise not throw any exception

9. **Create a test to check if @dataProvider amd @depends annotation can work together in a test.**

10. **Create a test that have assertCount($count, $array) assertion in it.**

