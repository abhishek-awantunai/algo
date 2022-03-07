/* 
Polyfill :-
    - It is a browser fallback
*/


const obj = {
    name: 'Abhishek'
};
const getName = function(city, pinCode, state) {
    return this.name + ' ' + city + ' ' + pinCode + ' ' + state;
} 

const fn1 = getName.bind(obj, 'Patna', 201301, 'Bihar');
console.log(fn1());

Function.prototype.myCustomBind = function(...args) {
    return () => this.call(args[0], ...args.slice(1));
};

const fn2 = getName.myCustomBind(obj, 'Patna', 201301, 'Bihar');
console.log(fn2());