/**
    Famous problem solving pattern
*/

const sameFrequency = (arr1, arr2) => {
    let temp = false;
    let obj1, obj2 = {};
    if (arr1.length !== arr2.length) {
        return temp;
    }

    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = obj1[arr1[i]] ? obj1[arr1[i]] + 1 : 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        obj1[arr1[i]] = obj2[arr2[i]] ? obj2[arr2[i]] + 1 : 1;
    }

    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
            temp = true;
        } else {
            temp = false;
            break;
        }
    }

    return temp;
}

console.log(sameFrequency([1, 2, 3, 4, 5], [1, 4, 9, 25, 9]));