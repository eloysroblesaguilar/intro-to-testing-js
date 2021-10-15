// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function (){
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string',function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should never return undefined',function (){
        expect(typeof sayHello()).not.toBe('undefined');
    });
    it('should return a greeting for the input', function (){
        expect(sayHello('Jay')).toBe("Hello Jay");
        expect(sayHello('Bob')).toBe("Hello Bob");

    });
});


/** Exercise #10 Let's Test-Drive an isFive function!
 Inside of tests.js, write a describe block for our new isFive function.
 As your first, failing test, write an it and an expect asserting that a function named isFive exists.
 Run the tests by refreshing report.html to show the red, failing test.
 Write just enough code inside of code.js to define an empty function for isFive.
 Now, refresh report.html to ensure that all tests are green.
 What other tests and implementation cycles should you do for isFive?
 Ensure that isFive returns a boolean no matter what the input
 Ensure that isFive returns true when passed 5
 What about if we pass in the string "5"? Do you want isFive to return true for that?
 If so, write the test, ensure that the test is failing, and then write the implementation
 Commit your work to git and push to GitHub before moving forward. **/


describe('isFive', function (){
    it('should be defined as a function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input',function (){
        expect(typeof isFive()).toBe('boolean');
        expect(typeof sayHello()).not.toBe('undefined');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed "5', function () {
        expect(isFive('5')).toBe(false);
    });

})

/** Exercise #11 TDD process for testing and creating an isEven function
Start with the smallest tests first. Assert that the function is defined.
    Write just enough code to green the test
Build up functionality one small piece at a time.
    Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
    Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
Assert that isEven:
    returns a boolean no matter the input
    returns true when executed with isEven(2)
    returns true when executed with isEven(-4)
    returns false when executed with isEven(3)
    returns false when called with isEven("banana")
    returns true when called with isEven("8")
    returns false when called with isEven(Infinity)
    return false when called with a boolean input like isEven(true) or isEven(false)
    returns false when called without an argument like isEven()
Refactor when and where you can. Be careful not to refactor before you have a handful of green tests.
    Repeat until the tests are robust and the function works as intended.
    Commit your work to git and push to GitHub before moving forward. **/

describe('isEven',function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed an even number or a string of an even number', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "bannana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called with without an argument', function () {
        expect(isEven()).toBe(false);
    });

})

/** Exercise #12 Test Drive an isVowel function
Start with the smallest tests first.
    Write just enough code to green the test
Build up functionality one small piece at a time.
    Commit your work to git at each step.
    Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
    Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
Assert that:
    isVowel always returns a boolean
isVowel("a") returns true
isVowel("A") returns true
isVowel("y") returns false
isVowel(4) returns false
isVowel(true) or isVowel(false) both return false
isVowel("banana") returns false
isVowel() returns false
Refactor when appropriate and possible.
    Repeat until the tests are robust and the function works as intended.
    Commit your work to git and push to GitHub before moving forward. **/

describe('isVowel', function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when passed a vowel', function () {
        expect(isVowel('a')).toBe(true);
        expect(isVowel('A')).toBe(true)
    });
    it('should return false when passed a consonant', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed a number', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a boolean value ', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed a string', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
})
