// Find the largest number in an array 

const array = [12, 2, 65, 45, 22];

let maxNumber = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxNumber) {
//         maxNumber = array[i];
//     }
// }

for (let i of array) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
    }
}

console.log(maxNumber);