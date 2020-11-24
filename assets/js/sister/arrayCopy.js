const list1 = [1, 2, 3, 4, 5];
// const list2 = [...list1];
// const list2 = list1.slice();
// const list2 = list1.concat([]);
const list2 = JSON.parse(JSON.stringify(list1));

list1.push(5, 6, 8);

console.log(list1); // [1,2,3,4,5]
console.log(list2); // [1,2,3,4,5,5,6,8]
