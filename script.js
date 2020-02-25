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

const morseAlphabet = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":","
}

const textToMorse = () => {
    const string = document.querySelector('#text-input').value;
    const regex = RegExp("^[a-zA-Z0-9 ]*$");
    if (regex.test(string)) {
        const arrayInput = string.toLowerCase().split('');
        const result = arrayInput.map(letter => alphabet[letter]).join(" ");
        return document.querySelector('#text-output').innerHTML = result;
    } else {
        return document.querySelector('#text-output').innerHTML = "Use only A-Z, a-z, 0-9 and whitespace characters"
    }
}

const decodeMorse = () => {
    const morseCode = document.querySelector('#text-input').value; 
    // const regex = RegExp("/^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/");
    // if(regex.test(morseCode)) {
    const output = morseCode.split('/');
    const output2 = output.map(word => word.split(' ').map(letter => morseAlphabet[letter]).join(''));
    return document.querySelector('#text-output').innerHTML = output2.join(' ');
    // } else {
    //     return document.querySelector('#text-output').innerHTML = 'Use only morse code characters';
    // }
}






const easySets = {
    "I ate dinner": ".. / .- - . / -.. .. -. -. . .-.",
    "We had a three-course meal": ".-- . / .... .- -.. / .- / - .... .-. . . / -.-. --- ..- .-. ... . / -- . .- .-..",
    "Brad came to dinner with us": "-... .-. .- -.. / -.-. .- -- . / - --- / -.. .. -. -. . .-. / .-- .. - .... / ..- ...",
    "He loves fish tacos": ".... . / .-.. --- ...- . ... / ..-. .. ... .... / - .- -.-. --- ...",
    "In the end we all felt like we ate too much": ".. -. / - .... . / . -. -.. / .-- . / .- .-.. .-.. / ..-. . .-.. - / .-.. .. -.- . / .-- . / .- - . / - --- --- / -- ..- -.-. ....",
    "We all agreed; it was a magnificent evening": ".-- . / .- .-.. .-.. / .- --. .-. . . -.. / .. - / .-- .- ... / .- / -- .- --. -. .. ..-. .. -.-. . -. - / . ...- . -. .. -. --."
}

const mediumSets = {
    "I hope that when I have built up my savings I will be able to travel to Mexico": ".. / .... --- .--. . / - .... .- - / .-- .... . -. / .. / .... .- ...- . / -... ..- .. .-.. - / ..- .--. / -- -.-- / ... .- ...- .. -. --. ... / .. / .-- .. .-.. .-.. / -... . / .- -... .-.. . / - --- / - .-. .- ...- . .-.. / - --- / -- . -..- .. -.-. ---",
    "Did you know that along with gorgeous architecture it is home to the largest tamale": "-.. .. -.. / -.-- --- ..- / -.- -. --- .-- / - .... .- - / .- .-.. --- -. --. / .-- .. - .... / --. --- .-. --. . --- ..- ... / .- .-. -.-. .... .. - . -.-. - ..- .-. . / .. - / .. ... / .... --- -- . / - --- / - .... . / .-.. .- .-. --. . ... - / - .- -- .- .-.. .",
    "Would not it be lovely to enjoy a week soaking up the culture": ".-- --- ..- .-.. -.. / -. --- - / .. - / -... . / .-.. --- ...- . .-.. -.-- / - --- / . -. .--- --- -.-- / .- / .-- . . -.- / ... --- .- -.- .. -. --. / ..- .--. / - .... . / -.-. ..- .-.. - ..- .-. .",
    "Of all the places to travel Mexico is at the top of my list": "--- ..-. / .- .-.. .-.. / - .... . / .--. .-.. .- -.-. . ... / - --- / - .-. .- ...- . .-.. / -- . -..- .. -.-. --- / .. ... / .- - / - .... . / - --- .--. / --- ..-. / -- -.-- / .-.. .. ... -",
    "Once you know all the elements it is not difficult to pull together a sentence": "--- -. -.-. . / -.-- --- ..- / -.- -. --- .-- / .- .-.. .-.. / - .... . / . .-.. . -- . -. - ... / .. - / .. ... / -. --- - / -.. .. ..-. ..-. .. -.-. ..- .-.. - / - --- / .--. ..- .-.. .-.. / - --- --. . - .... . .-. / .- / ... . -. - . -. -.-. .",
    "My mother hemmed and hawed over where to go for dinner": "-- -.-- / -- --- - .... . .-. / .... . -- -- . -.. / .- -. -.. / .... .- .-- . -.. / --- ...- . .-. / .-- .... . .-. . / - --- / --. --- / ..-. --- .-. / -.. .. -. -. . .-."
}

const hardSets = {
    "They put her through college and it was her intent to stay with them as long as they needed her": "- .... . -.-- / .--. ..- - / .... . .-. / - .... .-. --- ..- --. .... / -.-. --- .-.. .-.. . --. . / .- -. -.. / .. - / .-- .- ... / .... . .-. / .. -. - . -. - / - --- / ... - .- -.-- / .-- .. - .... / - .... . -- / .- ... / .-.. --- -. --. / .- ... / - .... . -.-- / -. . . -.. . -.. / .... . .-.",
    "I quickly put on my red winter jacket black snow pants waterproof boots homemade mittens and handknit scarf": ".. / --.- ..- .. -.-. -.- .-.. -.-- / .--. ..- - / --- -. / -- -.-- / .-. . -.. / .-- .. -. - . .-. / .--- .- -.-. -.- . - / -... .-.. .- -.-. -.- / ... -. --- .-- / .--. .- -. - ... / .-- .- - . .-. .--. .-. --- --- ..-. / -... --- --- - ... / .... --- -- . -- .- -.. . / -- .. - - . -. ... / .- -. -.. / .... .- -. -.. -.- -. .. - / ... -.-. .- .-. ..-.",
    "They sat in a heavy flat bottomed boat each holding a long crooked rod in his hands and eagerly waiting for a bite": "- .... . -.-- / ... .- - / .. -. / .- / .... . .- ...- -.-- / ..-. .-.. .- - / -... --- - - --- -- . -.. / -... --- .- - / . .- -.-. .... / .... --- .-.. -.. .. -. --. / .- / .-.. --- -. --. / -.-. .-. --- --- -.- . -.. / .-. --- -.. / .. -. / .... .. ... / .... .- -. -.. ... / .- -. -.. / . .- --. . .-. .-.. -.-- / .-- .- .. - .. -. --. / ..-. --- .-. / .- / -... .. - .",
    "Yes there it was all quivering in the warm sunshine its blossom laden branches almost touching the long grass": "-.-- . ... / - .... . .-. . / .. - / .-- .- ... / .- .-.. .-.. / --.- ..- .. ...- . .-. .. -. --. / .. -. / - .... . / .-- .- .-. -- / ... ..- -. ... .... .. -. . / .. - ... / -... .-.. --- ... ... --- -- / .-.. .- -.. . -. / -... .-. .- -. -.-. .... . ... / .- .-.. -- --- ... - / - --- ..- -.-. .... .. -. --. / - .... . / .-.. --- -. --. / --. .-. .- ... ...",
    "As proud as she was of Jonathan it was Alex who stayed on her mind for a long time after the phone call": ".- ... / .--. .-. --- ..- -.. / .- ... / ... .... . / .-- .- ... / --- ..-. / .--- --- -. .- - .... .- -. / .. - / .-- .- ... / .- .-.. . -..- / .-- .... --- / ... - .- -.-- . -.. / --- -. / .... . .-. / -- .. -. -.. / ..-. --- .-. / .- / .-.. --- -. --. / - .. -- . / .- ..-. - . .-. / - .... . / .--. .... --- -. . / -.-. .- .-.. .-..",
    "But then maybe Alondra was one of those people who simply took a long time to warm to strangers": "-... ..- - / - .... . -. / -- .- -.-- -... . / .- .-.. --- -. -.. .-. .- / .-- .- ... / --- -. . / --- ..-. / - .... --- ... . / .--. . --- .--. .-.. . / .-- .... --- / ... .. -- .--. .-.. -.-- / - --- --- -.- / .- / .-.. --- -. --. / - .. -- . / - --- / .-- .- .-. -- / - --- / ... - .-. .- -. --. . .-. ..."
}

let sentence = "";
let morseCodeSentence = "";

const getRandomString = (setOfTestStrings) => {
    const string = Object.keys(setOfTestStrings);
    const index = Math.floor(Math.random() * (string.length));
    const result = string[index];
    const morseResult = setOfTestStrings[result];

    // updateUserInterface(morseResult);
    sentence = result;
    morseCodeSentence = morseResult;

    return result;
}

// const updateUserInterface = (morseString) => {
//     document.getElementById("string-output").innerHTML = morseString;
// }


const playEasy = () => {
    getRandomString(easySets);
    document.getElementById("string-output").innerHTML = sentence;
}

const test = () => {
    if(document.getElementById("user-input").value == morseCodeSentence) {
        document.getElementById("user-input").style.backgroundColor = "green";
    } else {
        document.getElementById("user-input").style.backgroundColor = "red";
    }
    getInputLength();
    getMorseCodeSlice();
}

const getInputLength = () => {
    const input = document.getElementById("user-input").value;
    return input.length;
}

const getMorseCodeSlice = () => {
    const length = getInputLength() - 1;
    console.log(`input length : ${length}`);
    const morseArray = morseCodeSentence.split(" ");
    // console.log(morseArray);
    
    const morseSlice = morseArray.slice(0, length);
    console.log(`reference morse code slice: ${morseSlice}`);
    const joinedArray = morseSlice.join(" ");
    console.log(joinedArray);
    
}










