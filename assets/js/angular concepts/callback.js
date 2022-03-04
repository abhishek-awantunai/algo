/**

Callback Functions / Higher Order Functions

In computer programming, a callback, also known as a "call-after" function, is any executable code that is passed as an argument to other code; that other code is expected to call back the argument at a given time.


*/

const addValuesAndThenPassAfterFewSceonds = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 3000);
};

const printValue = (val) => {
  console.log(val);
};

addValuesAndThenPassAfterFewSceonds(1, 3, printValue);


const makeTea = () => {
  console.log("tea made and served instatntly");
};

const goMarketAndBringTeaLeves = (cb) => {
  setTimeout(() => {
    console.log("2 sec elapsed in going market and bringing teal leaves");
    cb();
  }, 2000);
};

const checkTeaLeves = (cb) => {
  setTimeout(() => {
    console.log("3 sec elapsed in checking ingedients");
    cb(makeTea);
  }, 3000);
};

const orderTea = (cb) => {
  setTimeout(() => {
    console.log("Waiter came and took order for tea 1 sec elapsed");
    cb(goMarketAndBringTeaLeves);
  }, 1000);
};

orderTea(checkTeaLeves);
