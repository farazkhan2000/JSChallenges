// Find the second maximum number in an array

const array = [2, 45, 64, 36];

let maxNumber = 0;

// Finding the maximum number
for (let i of array) {
    if (i > maxNumber) {
        maxNumber = i;
    }
}

console.log("Max number is: ", maxNumber);

const index = array.indexOf(maxNumber);

array.splice(index, 1); // Removing the maximum number from the array

let secondMaxNumber = 0;

// Finding the second maximum number in the modified array
for (let i of array) {
    if (i > secondMaxNumber) {
        secondMaxNumber = i;
    }
}

console.log("Second Max number is: ", secondMaxNumber);

