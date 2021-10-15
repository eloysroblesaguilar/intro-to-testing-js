// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
/** S Y N T A X **/

function sayHello(input) {
    return 'Hello ' + input;
}

function isFive(x) {
    return x === 5;
}

function isEven(x) {
    if (typeof x === 'boolean') {
        return false;
    } else {
        return x % 2 === 0;
    }
}

function isVowel (x) {
    // if (typeof x == 'number') {
    //     return false;
    // } else if (typeof x == 'boolean') {
    //     return false;
    // } else {
    //     x = x.toLowerCase()
    /** unlucky i could not use .toLowerCase() because it was causing an error when passed inputs that werent strings **/
        return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U' ;
}

console.log(isVowel(false));
console.log(isVowel(4));
