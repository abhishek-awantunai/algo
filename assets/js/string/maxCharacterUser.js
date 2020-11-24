
const maxCharsUsed = (str) => {
  let stringCountTracker = {};
  let temp = 0;
  let character = "";
  for (let char of str) {
    stringCountTracker[char] = (stringCountTracker[char] || 0) + 1;
    if (stringCountTracker[char] > temp) {
      character = char;
      temp = stringCountTracker[char];
    }
  }

  return character;
};

console.log(maxCharsUsed("4444456tdetet34543543"));
