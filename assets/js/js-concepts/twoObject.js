const user1 = {
  name: "Jordan",
  age: 21,
};

const user2 = {
  name: "Jordan",
  age: 21,
};

const user3 = user1;

// Two objects are never equal to eacch other in JAVASCRIPT because we always store refrences
// of that objects in the variable i.e in user1 and user2

console.log(user1 == user2);
console.log(user1 === user2);

console.log(JSON.stringify(user1) === JSON.stringify(user2));
console.log(JSON.stringify(user1) == JSON.stringify(user2));

console.log(user1 == user3);
console.log(user1 === user3);
