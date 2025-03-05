let arr = [1, 33, 44, 53, 24, 24, 13, 55];

console.log("Before sorting:", arr);

// Bubble Sort Algorithm
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements if they are in the wrong order
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
/**--------------------------------------------------- */
console.log("After sorting:", arr);

let arr = [1, 33, 44, 53, 24, 24, 13, 55];

console.log("Before sorting:", arr);

// Sorting the array in ascending order
arr.sort((a, b) => a - b);

console.log("After sorting:", arr);
