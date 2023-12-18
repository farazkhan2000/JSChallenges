let array = [2, 3, 4, 5];

const evenFunction = (value) => {
    return value % 2 === 0;
}

const evenNumbers = array.filter(evenFunction);
console.log(evenNumbers);