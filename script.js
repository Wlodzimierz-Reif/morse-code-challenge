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
