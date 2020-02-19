// turn given string to lower case
// change string to an array using split
// iterate over an array using map
// compare every letter to object property

const alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
}

// const letter = 'a';
// console.log(alphabet[letter]);


const string = 'This is my test string for the challenge';

const newString = string.toLowerCase();
const stringToArray = newString.split('');

// const compareLetter = (object, character) => {
//     const trueFalse = object.hasOwnProperty('character');
// }
const outputArray = stringToArray.map(letter => {
    return alphabet[letter];
});

const result = outputArray.join(" ");
console.log(result);

