const numbers = [3, 6, 7, 8, 10, 43, 56, 78, 99];
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);


//splice to remove an element from an array
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);

/* const numberSpliced2 = numbers.splice(4, 3, 99, 8, 111, 222, 56, 45);
console.log(numberSpliced2);
console.log(numbers); */

/* const numberSpliced2 = numbers.splice(4, 1, 99, 8);
console.log(numberSpliced2);
console.log(numbers); */

const numberSpliced2 = numbers.splice(4, 0, 99, 8);
console.log(numberSpliced2);
console.log(numbers);