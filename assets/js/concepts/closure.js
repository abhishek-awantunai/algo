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