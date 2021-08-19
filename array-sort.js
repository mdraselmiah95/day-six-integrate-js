const numbers = [4, 3, 6, 8, 99, 2, 1, 8, 5, 9];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);


const friends = ['Rohim', 'Korim', 'Shamol', 'Shakib', 'AL-amin', 'Lion'];
const sortedFriends = friends.sort();
const reversedFriends = friends.reverse();
const reversedSortedFriends = friends.sort().reverse();
// console.log(reversedFriends);
// console.log(sortedFriends);
// console.log(reversedSortedFriends);

//number sorting fun

const bigNumbers = [66, 13, 76, 99, 12, 11, 51, 1, 9, 31];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);