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
