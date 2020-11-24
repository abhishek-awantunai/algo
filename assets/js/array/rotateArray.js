const rotateArrayClockwise = (nums, k) => {
  return [
    ...nums.slice(nums.length - k, nums.length),
    ...nums.slice(0, nums.length - k),
  ];
};

// const rotateArrayClockwise = (nums, k) => {
//   nums = nums
//     .slice(nums.length - k, nums.length)
//     .concat(nums.slice(0, nums.length - k));
//   return nums;
// };

// var rotate = function(nums, k) {
//   while (k > 0) {
//    nums.unshift(nums.pop());
//    k--;
//  }
// };

console.log(rotateArrayClockwise([1, 2, 3, 4, 5, 6, 7], 3));
