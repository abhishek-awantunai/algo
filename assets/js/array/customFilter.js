Array.prototype.mfilter = function (fun) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

let returnedArr = [1, 2, 3, 4, 5, 6].mfilter(function (element, index, arr) {
  return element % 2 === 0;
});

console.log(returnedArr);
