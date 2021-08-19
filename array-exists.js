function megaFriend(friends) {
    /*    if (Array.isArray(friends) == false) {
           return 'Please provide an array';
       } */
    if (Array.isArray(friends) == false) {
        return 'Please provide valid name'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['Rohim', 'Korim', 'Shamol', 'Shakib', 'AL-amin', 'Lion'];
const myFriend = megaFriend(friends);
// console.log(myFriend);

if (friends.indexOf('Lion') != -1) {
    console.log('Lion exists');
} else {
    console.log('Fox does not exits.');
}
//includes
if (friends.includes('Lion')) {
    // console.log('Lion exits using includes.');
}

//concat

const first = [1, 4, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);