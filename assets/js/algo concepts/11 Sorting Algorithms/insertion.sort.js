/* Insertion Sort :-
    - It is similar to Bubble Sort but in this sorting algorithm it places the smallest element in the sorted position.
*/

// Insertion Sort Implementation

const insertionSortTheArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i ; j++) {
            console.log(i, j);
        }
    }
    return arr;
}

const arr1 = [13, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(insertionSortTheArray(arr1));
