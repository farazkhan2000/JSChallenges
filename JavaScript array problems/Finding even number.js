// Finding even numbers in an array using Array filter() method

const array = [2, 3, 4, 5, 10];

const findEvenInArray = (value) => {
    return value % 2 === 0;
}

const evenNumbers = array.filter(findEvenInArray);
console.log(evenNumbers);

