const products = [
    'Dell laptop with high resolution screen',
    'Dell yellow shoes with green shirt',
    'HTC phone with handsome headphone',
    'Apple laptop also called mackBook Air',
    'LG supernova laptop',
    'purple color phone with laptop',
    'LG supernova laptop with nice display'
]
// const searching = 'laptop';
// const searching = 'dell';
const searching = 'Lg';

//indexOf

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

//starts with


/* for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output); */

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
// console.log(output);

//endsWith()

let sentence = 'This is my country Bangladesh';

// sentence.endsWith('Bangladesh');
console.log(sentence.endsWith('Bangladesh')); //true
console.log(sentence.endsWith('bangladesh')); //false
// console.log(sentence.toLowerCase().endsWith('bangladesh'));  //true