const tripleAddFunction = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(tripleAddFunction(5)(6)(7));
