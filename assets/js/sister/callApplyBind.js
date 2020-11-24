const obj = {
  name: "Abhishek",
  getBio(num1, num2) {
    // console.log(
    //   "My name is " +
    //     this.name +
    //     " and age is " +
    //     this.age +
    //     " and i do hava a " +
    //     this.color +
    //     " mom"
    // );
    console.log(this);
  },
};

const abhiData = {
  name: "Abhishek",
  age: 32,
  color: "bht kala",
};

// Normal call
obj.getBio(12, 13);

/**
  With call we use method invocation to change `this` inside this function and parameters are 
  passed comma seperated. 
  In both call and apply method also gets called but in binf only this gets attched but method 
  is not called
*/
console.log(obj.getBio.call(abhiData, 14, 15));

// With apply we use method invocation to change `this` inside this function and parameters are passed as an array
console.log(obj.getBio.apply(abhiData, [14, 15]));

// With apply we use method binding to change `this` inside this function and parameters are passed as an array
const newBindedGetBio = obj.getBio.bind(abhiData, 14, 15);
console.log(newBindedGetBio);
console.log(newBindedGetBio());
