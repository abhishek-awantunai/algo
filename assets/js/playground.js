let arr = [1,2,34,534,235,345,43,3];

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 1; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(sortArray(arr));