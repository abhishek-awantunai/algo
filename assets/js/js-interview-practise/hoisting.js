/*
  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
*/


var x = 10;

function y() {
  x = 100;
  return;
  function x() { }
}

y();

console.log(x); // 10

var a = 10;

function b() {
  function a() { }
  a = 100;
  return;
}

b();

console.log(a); // 10

var c = 10;

function d() {
  c = 100;
  return;
}

d();

console.log(c); // 100


console.log(color);

var color = "red";

console.log(color);

function apple(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

apple(1)(2)(3);
