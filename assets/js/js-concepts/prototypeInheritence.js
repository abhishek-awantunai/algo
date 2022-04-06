/**

Inheritance in JS is one object trying to access properties and methods of another object.

Whenever we create a JS object / array / function then JS automatically attaches object with some properties and functions.These are the hidden properties and functions that we can access. This hidden object that gets automatically attached is called as prototype.

We can see the hidden properties attached using __proto__

let arr = [1, 2, 3];

let obj = {
    name: 'Abhishek',
    age: 29
}

function fun () {
    console.log('fun');
}

arr.__proto__ = Array.prototype
arr.__proto__.__proto__ = Object.prototype
arr.__proto__.__proto__.__proto__ = null


Whenever we create an array it has its prototype which is Array.prototype and Array.prototype object also has a prototype Object.prototype and the Object.prototype refers to null.

So this chain of prototype is called as object chain.

Everything in JS is Object this statement comes from here : -
Whether we make array / function / object then down the prototype chain it is an Object hence it is said that. 








*/