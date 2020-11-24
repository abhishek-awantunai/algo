const arr = [];
let total = 0;
for (let i = 1; i <= 100; i++) {
  if (i !== 53) arr.push(i);
  total += i;
}

const totalFor = (100 * (100 + 1)) / 2;

const arrReduce = arr.reduce((accumulator, item) => accumulator + item);
const missing = totalFor - arrReduce;

console.log(missing);
