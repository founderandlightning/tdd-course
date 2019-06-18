# TDD Session 4
In this session, we are going to discuss the feature tests.

## Focus Points
- Review previous session
- Git hooks
- Testing Exceptions 
- General terminologies in Feature test
- Code coverage with Basic configurations
- Why my tests are failing
- My first feature test

<hr />

## Review previous session
You all are requested to have a look into previous session questions and complete homework before moving on with session three. Apart from this, please make sure you know about few important concepts from previous session. 
- What is TDD and Unit Test?
- what are the benefits of validating your logic using the unit test?

<hr />

## My first feature test


```
class DepTest extends TestCase
{
    public function testBasic()
    {
        $response = $this->get('/');
        $response->assertStatus(400);
    }
 

}
```

## Why My test are failing
These are the few important assertions available on nodejs default package `assert`. 
-  Check if `route` is correct for which you are writing the test case
-  Feature (http) v/s unit test
-  Faker
-  Incorrect test case
```


## Few important assertions
These are the few important assertions available on nodejs default package `assert`. 
- `assertSeeText(text)`: The assert method tests if the array given has the key(text).
- `assertStatus(httpcode)`: The assert method tests if the httpcode return by request matches to parameter.
- `assertJsonCount(10, 'data');`: The assert method tests if the array given has 10 keys.
- `assertInstanceOf(class, $object)`: The assert method tests if the object return is instance of the class.ll

<hr />

[Homework](Homework.md)







