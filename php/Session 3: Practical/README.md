# TDD Session 3
In this session, we are going to discuss few important things at intermediate level while writing unit test with real project.

## Focus Points
- Review previous session
- General terminologies in TDD
  - Fixtures
  - Factories & Faker
- Test Dependencies
- Testing Exceptions 
- More assertions
- Project setup
- Unit test with DB interaction
- Homework/Assignments

<hr />

## Review previous session
You all are requested to have a look into previous session questions and complete homework before moving on with session three. Apart from this, please make sure you know about few important concepts from previous session. 
- What is TDD and Unit Test?
- What are assertions?
- what are the benefits of validating your logic using the unit test?
- What are the popular PHP frameworks for unit test?

<hr />

## General terminologies in TDD
**Fixtures** : A test fixture is a fixed state of a set of objects/data used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run.
**Uses of Fixtures**:
- Preparation of input data and setup/creation of fake or mock objects
- Loading a database with a specific, known set of data
- Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.

**Factories & Faker**:
Faker is a Python package that generates fake data for you. It will help you to bootstrap your database.

```
public static function setUpBeforeClass():void
    {
        exec('php artisan migrate:refresh');
        exec('php artisan db:seed');       
    }
```

**Factories & Faker**: When building out applications, we will often need data to show off how it works. It won't be much of an application if all our tables are blank!

&nbsp; &nbsp; Often, when we first start building out an application, we don't want to worry too much about the data. Having to create a database and fill it with sample data like users is an annoying step that is just in the way of creating an amazing app.

```
$factory->define(App\User::class, function (Faker\Generator $faker, $attributes) {
   return [
     'name' => $faker->name,
     'email' => $faker->email,
     'password' => bcrypt(str_random(10)),
     'remember_token' => str_random(10),
 'role_id' => $attributes['role_id'] ?? config('constants.ADMIN)];
});
```
<hr />

## Test dependencies

@depends annotation helps you to express dependencies between methods.

Note that you have to keep to proper order for your methods.

Such dependencies do not define the order in which the test methods are to be executed but they allow the returning of an instance of the test fixture by a producer and passing it to the dependent consumers.

```
class DepTest extends TestCase
{
    public function testProducer()
    {
        $this->assertTrue(true);
        return ‘nike’;
    }
   
    /**
     * @depends testProducer
     */
    public function testConsumer($product)
    {
        $this->assertEquals( ‘nike’, $product );
    }
}
```

## Data Providers

In order to avoid the duplication of our tests to cover all the edge cases for different datasets, the data providers are added in tests. 

```
class DataTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAdd($a, $b, $expected)
    {
        $this->assertEquals($expected, $a + $b);
    }

    public function additionProvider()
    {
        return [ [1, 1, 2],
                 [1, 1, 3]
               ];
    }
}
```

## Testing Exceptions

There are some cases where we know that running the particular piece of code will return an exception. In there comes the role of testing exceptions.

We can expect the exception in 2 ways : 

$this->expectException(InvalidArgumentException::class)

&& with annotation

@expectedException InvalidArgumentException

```
class ExceptionTest extends TestCase
{
    public function testException()
    {
     $this->expectException(InvalidArgumentException::class);
    }

     /**
     * @expectedException InvalidArgumentException
     */
    public function testAnotherException()
    {

    }
}
```

## Few important assertions
These are the few important assertions available on nodejs default package `assert`. 
- `assertArrayHasKey($key, $array)`: The assert method tests if the array given has the key.
- `assertCount($count, $array)`: This assert method tests if count gives and the count of array are equal.
- `assertEmpty($empty)`: This assert method tests if the array is empty or not.
- `assertGreaterThan($small, $greater)`: Thid assert method tests the result is greater than the given value.
- `assertInstanceOf(class, $object)`: The assert method tests if the object return is instance of the class.ll

<hr />

[Homework](Homework.md)







