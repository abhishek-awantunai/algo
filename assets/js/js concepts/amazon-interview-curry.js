/*
Implement :-
sum(1)(2)(3)(4)(5)(6)(7).....(n)
*/

const sum = (x) => {
    return (y) => {
        return x+y
    }
}
const result = sum(1)(2);
console.log(sum);