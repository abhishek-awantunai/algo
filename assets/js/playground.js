const radius = [1, 2, 3, 4, 5];

const calculateAreaOfCircle = (radius) => {
    return Math.round(Math.PI*radius*radius);
}
const calculateCircumference = (radius) => {
    return Math.round(2*Math.PI*radius);
}
const calculateDiameter = (radius) => {
    return 2*radius;
}

const calculationWrapper = (radius, fn) => {
    const arr = [];
    for (let i = 0; i < radius.length; i++) {
        arr.push(fn(radius[i]));
    }
    return arr;
};

console.log(calculationWrapper(radius, calculateAreaOfCircle));
console.log(calculationWrapper(radius, calculateCircumference));
console.log(calculationWrapper(radius, calculateDiameter));