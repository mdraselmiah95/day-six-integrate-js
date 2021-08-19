function addNumbers(num1, num2) {
    // console.log(arguments[2]);
    let result = 0;
    for (const num of arguments) {
        result += num; //result = result + num
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(15, 55, 23, 81, 412, 91, 100, 55, 100);
// console.log(sum);



function getFullName(firstName, lastName) {
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const name = getFullName('Al', 'Shakib', 'Asif', 'Korim', 'Habib');
console.log(name);