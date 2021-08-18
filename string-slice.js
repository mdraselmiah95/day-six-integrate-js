const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi ';
// const words = anthem.split(' ');
// const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);


//Slice
const smallSlice = anthem.slice(5, 15);
// console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

//substring

const anotherP = anthem.substring(11, 15);
// console.log(anotherP);

//concat

const first = 'Rasel';
const second = 'mia';
// const fullString = first + second;

const fullString = first.concat(second).concat(' abc').concat(first).concat('This is really good')
// console.log(fullString);

const allWord = ['a', 'b', 'c', 'd', 'e', 'f'];
// const allJoined = allWord.join('');
// const allJoined = allWord.join(' ');
const allJoined = allWord.join(', ');
// console.log(allJoined);

const names = ['Korim', 'Rohim', 'Shakib', 'Mizan'];
// const joinedNames = names.join('');
// const joinedNames = names.join(' ');
// const joinedNames = names.join(', ');
const joinedNames = names.join(' good ');
console.log(joinedNames);