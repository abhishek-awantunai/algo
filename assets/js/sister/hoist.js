console.log(color); // undefined

var color = "blue";

console.log(color); // blue

/**
  a function created with Function declaration is also availabe before its declaration.
  i.e we can call getSum(2,3) over here but getExpSum(2,3) will throw error over here because
  getExpSum is undefined over here and  undefined is not a function.
  And getExpSum becomes undefined due to hoistind of variable
*/

// Function Declaration
console.log(getSum(2, 3));
function getSum(a, b) {
  return a + b;
}

// Function Expression
var getExpSum = function (a, b) {
  return a + b;
};

console.log(getExpSum(2, 3));

function getTotal() {
  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

console.log(getTotal());
