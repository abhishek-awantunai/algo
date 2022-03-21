/*
Curry a function :-
In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed
*/

/*
Method 1:-
    - Using Bind Method
*/

let multiply = function (x, y) {
    return x * y;
}

const multiplyByTwo = multiply.bind(this, 2);

const result = multiplyByTwo(5,2);

console.log(result);

/*
Method 2:-
    - Using Closures
*/

const add = function (x) {
    return function (y) {
        return x + y;
    }
}

const addTwo = add(2);

// const sum = addTwo(5);
const sum = add(5)(2);

console.log(sum);