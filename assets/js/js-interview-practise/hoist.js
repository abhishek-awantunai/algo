// This happens because of HOISTING of function

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
