/**
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

*/

let firstUniqChar = (s) => {
  const frequencyChar = {};

  for (let char of s) {
    frequencyChar[char] = (frequencyChar[char] || 0) + 1;
  }

  return frequencyChar;
};

console.log(firstUniqChar("leetcode"));
