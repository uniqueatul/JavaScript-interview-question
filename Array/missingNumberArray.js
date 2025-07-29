// Write a function to find the missing number in an array of consecutive integers.

let array = [1, 2, 3, 5, 6]; // Example array with a missing number

function findMissingNumber(arr) {
    const n = arr.length + 1; // Total numbers should be n
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of the array elements
    return expectedSum - actualSum; // The difference is the missing number
}
console.log(findMissingNumber(array)); // Output: 4



