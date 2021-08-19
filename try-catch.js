const myName = 'ami';
let student = undefined;

// console.log(student.name);
// throw '';

try {
    myName = 'tumi';
} catch (error) {
    console.log('Getting error', error);
}
console.log(myName);