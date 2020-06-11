## Setup

* The code is in the src directory
* Tests are in the spec directory (specifications)
* The tooling is in the lib directory - you could also use jasmine via a CDN link

#### Introduce the hello-ironhack function

#### How can we test that function?

#### First we add a test file for that function

```bash
$ mkdir spec
$ touch spec/hello-ironhack.spec.js
```

```js
// spec/hello-ironhack.spec.js
describe('Hello ironhack function', function () {
    it('Should be a function', function () {
        expect(typeof helloIronhack).toBe('function');
    });
    it('Should return greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    });
});
```

#### Syntax
* describe - this is called a suite, meaning a group of tests
* t - this is called a spec (specification) 
* expect - the expectation where you check if the result is as expected
* toEqual() - a matcher 

toEqual vs toBe - they do almost the same - toBe would check for objects that they are exactly the same object, toEqual would check for the same 'content'

## Another example

#### Introduce Chuck.js

#### Let's add a test

```bash
$ touch spec/Chuck.spec.js
```

#### We want to test the addJoke method 

#### For that we need to instantiate the class. As we would do that before each test we could add a piece of code that we would want to execute before every test. 

#### To check if the array contains the correct joke we use the toContain() matcher

```js
// spec/Chuck.spec.js
describe('Chuck', function () {
    let chuck;
    const joke = 'Chuck Norris can divide by zero';
    beforeEach(function () {
        chuck = new Chuck();
    });
    describe('addJoke', function () {
        it('should add a joke', function () {
            chuck.addJoke(joke);
            expect(chuck.jokes).toContain(joke)
        });
    });
});
```

## Test Driven Development - TDD

#### Let's do FizzBuzz TDD style 💪

#### These are the Rules of TDD

* You can't write any production code until you have first written a failing spec.
* You can't write more of a unit test than is sufficient to fail.
* You can't write more production code than is sufficient to pass the currently failing unit test.

#### This would be the specs for our fizzbuzz function

* The function should return the passed in number
* For multiples of 3 return fizz - of 5 return buzz - of 3 and 5 return fizzbuzz

#### Create the FizzBuzz testfile

```bash
$ touch spec/FizzBuzz.spec.js
```

#### Incrementally add these tests one by one
```js
// spec/FizzBuzz.spec.js
describe('FizzBuzz', function () {
    it('is a function', function () {
        expect(typeof fizzBuzz).toBe('function');
    });
    it('returns 1 for 1', function () {
        expect(fizzBuzz(1)).toEqual(1);
    });
    it('returns 2 for 2', function () {
        expect(fizzBuzz(2)).toEqual(2);
    });
    it('returns fizz for 3', function () {
        expect(fizzBuzz(3)).toEqual('fizz');
    });
    it('returns fizz for 6', function () {
        expect(fizzBuzz(6)).toEqual('fizz');
    });
    it('returns buzz for 5', function () {
        expect(fizzBuzz(5)).toEqual('buzz');
    });
    it('returns buzz for 10', function () {
        expect(fizzBuzz(10)).toEqual('buzz');
    });
    it('returns fizzbuzz for 15', function () {
        expect(fizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('returns fizzbuzz for 30', function () {
        expect(fizzBuzz(30)).toEqual('fizzbuzz');
    });
});
```

#### For every step make the minimal changes to the fizzbuzz function until you arrive here:

```js
// src/FizzBuzz.js
function fizzBuzz(num) {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz'
    return num;
}
```

#### Then we could refactor that code to this version while constantly running our tests and therefore being sure that we don't make any breaking changes to the code 

```js
// src/FizzBuzz.js
function fizzBuzz(num) {
    let string = '';
    if (num % 3 == 0) string += 'fizz';
    if (num % 5 == 0) string += 'buzz';
    return string || num;
}
```

#### By the way: The shortest (though surely not the best 🙃)FizzBuzz function that passes our tests is this -> 

```js
const fizzBuzz=num=>(num%3?'':'fizz')+(num%5?'':'buzz')||num
```

## 😺🚀🤯