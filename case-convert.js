const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi ';
const search = 'valo';

const userInput = 'blACkPink';
const savedUserName = 'blackPink';
// console.log(userInput.toLowerCase());
// console.log(savedUserName.toUpperCase());

if (userInput.toLocaleLowerCase() == savedUserName.toLocaleLowerCase()) {
    console.log('user exist');
} else {
    console.log('user do not exist');
}