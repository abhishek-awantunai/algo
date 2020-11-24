// Same array Frequency Counter

const sameArrayFrequencyCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const frequency1 = {};
  const frequency2 = {};

  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key * key in frequency2)) {
      return false;
    }

    if (frequency1[key] !== frequency2[key * key]) {
      return false;
    }
  }
  return true;
};

const arr1 = [2, 3, 6, 2, 3];
const arr2 = [9, 4, 36, 4, 9];
console.log(sameArrayFrequencyCounter(arr1, arr2));
