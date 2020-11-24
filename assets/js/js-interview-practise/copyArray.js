const list1 = [1, 2, 3, 4, 5];

const list2 = list1;
const list3 = list1.slice();
const list4 = list1.concat([]);
const list5 = [...list1];
const list6 = JSON.parse(JSON.stringify(list1));

list1.push(6, 7, 8, 9);

console.log(list1);
console.log(list2);
console.log(list3);
console.log(list4);
console.log(list5);
console.log(list6);
