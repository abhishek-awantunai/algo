/**

  Closures are functions that uses variables of the outer function even after the outer function has returned

*/

const trackMyCall = (function () {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

console.log(trackMyCall());
console.log(trackMyCall());
console.log(trackMyCall());
console.log(trackMyCall());
console.dir(trackMyCall);


const globalVariable = "sdfsdfd";

function outerFunction(param1) {
  const variable1 = "var one";

  function innerFunction(param2) {
    const variable2 = "var two";
    console.log("global variable ", globalVariable);
    console.log("variable1 ", variable1);
    console.log("variable2 ", variable2);
    console.log("param1 ", param1);
    console.log("param2 ", param2);
  }

  innerFunction("param one");

  console.dir(innerFunction);
}

outerFunction("param two");
