/**
  If a function is a method function [ wo function jo object ke key ke andar hota hai  ] then only 
  `this` inside it will refer to the object associated with it or of which object this method is 
  a part of and in all other cases this refers to window object in normal mode and undefined in 
  Strict mode.
*/

// https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8

console.log(this);

function abc() {
  console.log(this);
}

const normal = function () {
  console.log(this);
};

const arrow = () => {
  console.log(this);
};

(function a() {
  console.log(this);
})();

(function () {
  console.log(this);
})();

const obj = {
  a: "10",
  methodKey: function () {
    console.log("methodKey : ", this);
    function outer() {
      console.log("outer : ", this);
    }

    const ancestor = () => {
      console.log("ancestor : ", this);
    };
    outer();
    ancestor();
  },
  method() {
    console.log("method : ", this);
  },
  methodArrow: () => {
    console.log("methodArrow : ", this);
    const aaa = () => {
      console.log("aaa : ", this);
    };
    function apple() {
      console.log("apple : ", this);
    }
    apple();
    aaa();
  },
};

abc();
normal();
arrow();
obj.methodKey();
obj.method();
obj.methodArrow();

/**
  undefined
  undefined
  undefined
  undefined
*/

const obj2 = {
  a: "10",
  methodKey: function () {
    console.log(this);
    (function () {
      console.log(this);
    })();

    function sample() {
      console.log("sample : ", this);
    }

    const arrr = () => {
      console.log("arrr : ", this);
    };
    arrr();
    sample();
  },
  mehtodArrow: () => {
    console.log("mehtodArrow : ", this);
    function kakak() {
      console.log("kakak : ", this);
    }
    kakak();
  },
};

obj2.methodKey();
obj2.mehtodArrow();
