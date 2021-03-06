const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "   ",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
};

const morseAlphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "   ": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ",",
};

const textToMorse = () => {
  document.querySelector("#text-output").innerHTML = "";
  const string = document.querySelector("#text-input").value;
  const regex = RegExp("^[a-zA-Z0-9 ]*$");
  if (regex.test(string)) {
    const arrayInput = string.toLowerCase().split("");
    const result = arrayInput.map((letter) => alphabet[letter]).join(" ");
    return (document.querySelector("#text-output").innerHTML = result);
  } else {
    return (document.querySelector("#text-output").innerHTML =
      "Use only A-Z, a-z, 0-9 and whitespace characters");
  }
};

const decodeMorse = () => {
  const morseCode = document.querySelector("#text-input").value;
  const regex = RegExp(
    "^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$"
  );
  if (regex.test(morseCode)) {
    const output = morseCode.split("   ");
    const output2 = output.map((word) =>
      word
        .split(" ")
        .map((letter) => morseAlphabet[letter])
        .join("")
    );
    return (document.querySelector("#text-output").innerHTML = output2.join(
      " "
    ));
  } else {
    return (document.querySelector("#text-output").innerHTML =
      "Use only morse code characters");
  }
};

const easySets = {
  "I ate dinner": "..   .- - .   -.. .. -. -. . .-.",
  "We had a three course meal":
    ".-- .   .... .- -..   .-   - .... .-. . .   -.-. --- ..- .-. ... .   -- . .- .-..",
  "Brad came to dinner with us":
    "-... .-. .- -..   -.-. .- -- .   - ---   -.. .. -. -. . .-.   .-- .. - ....   ..- ...",
  "He loves fish tacos":
    ".... .   .-.. --- ...- . ...   ..-. .. ... ....   - .- -.-. --- ...",
  "In the end we all felt like we ate too much":
    ".. -.   - .... .   . -. -..   .-- .   .- .-.. .-..   ..-. . .-.. -   .-.. .. -.- .   .-- .   .- - .   - --- ---   -- ..- -.-. ....",
  "We all agreed it was a magnificent evening":
    ".-- .   .- .-.. .-..   .- --. .-. . . -..   .. -   .-- .- ...   .-   -- .- --. -. .. ..-. .. -.-. . -. -   . ...- . -. .. -. --.",
};

const mediumSets = {
  "I hope that when I have built up my savings I will be able to travel to Mexico":
    "..   .... --- .--. .   - .... .- -   .-- .... . -.   ..   .... .- ...- .   -... ..- .. .-.. -   ..- .--.   -- -.--   ... .- ...- .. -. --. ...   ..   .-- .. .-.. .-..   -... .   .- -... .-.. .   - ---   - .-. .- ...- . .-..   - ---   -- . -..- .. -.-. ---",
  "Did you know that along with gorgeous architecture it is home to the largest tamale":
    "-.. .. -..   -.-- --- ..-   -.- -. --- .--   - .... .- -   .- .-.. --- -. --.   .-- .. - ....   --. --- .-. --. . --- ..- ...   .- .-. -.-. .... .. - . -.-. - ..- .-. .   .. -   .. ...   .... --- -- .   - ---   - .... .   .-.. .- .-. --. . ... -   - .- -- .- .-.. .",
  "Would not it be lovely to enjoy a week soaking up the culture":
    ".-- --- ..- .-.. -..   -. --- -   .. -   -... .   .-.. --- ...- . .-.. -.--   - ---   . -. .--- --- -.--   .-   .-- . . -.-   ... --- .- -.- .. -. --.   ..- .--.   - .... .   -.-. ..- .-.. - ..- .-. .",
  "Of all the places to travel Mexico is at the top of my list":
    "--- ..-.   .- .-.. .-..   - .... .   .--. .-.. .- -.-. . ...   - ---   - .-. .- ...- . .-..   -- . -..- .. -.-. ---   .. ...   .- -   - .... .   - --- .--.   --- ..-.   -- -.--   .-.. .. ... -",
  "Once you know all the elements it is not difficult to pull together a sentence":
    "--- -. -.-. .   -.-- --- ..-   -.- -. --- .--   .- .-.. .-..   - .... .   . .-.. . -- . -. - ...   .. -   .. ...   -. --- -   -.. .. ..-. ..-. .. -.-. ..- .-.. -   - ---   .--. ..- .-.. .-..   - --- --. . - .... . .-.   .-   ... . -. - . -. -.-. .",
  "My mother hemmed and hawed over where to go for dinner":
    "-- -.--   -- --- - .... . .-.   .... . -- -- . -..   .- -. -..   .... .- .-- . -..   --- ...- . .-.   .-- .... . .-. .   - ---   --. ---   ..-. --- .-.   -.. .. -. -. . .-.",
};

const hardSets = {
  "They put her through college and it was her intent to stay with them as long as they needed her":
    "- .... . -.--   .--. ..- -   .... . .-.   - .... .-. --- ..- --. ....   -.-. --- .-.. .-.. . --. .   .- -. -..   .. -   .-- .- ...   .... . .-.   .. -. - . -. -   - ---   ... - .- -.--   .-- .. - ....   - .... . --   .- ...   .-.. --- -. --.   .- ...   - .... . -.--   -. . . -.. . -..   .... . .-.",
  "I quickly put on my red winter jacket black snow pants waterproof boots homemade mittens and handknit scarf":
    "..   --.- ..- .. -.-. -.- .-.. -.--   .--. ..- -   --- -.   -- -.--   .-. . -..   .-- .. -. - . .-.   .--- .- -.-. -.- . -   -... .-.. .- -.-. -.-   ... -. --- .--   .--. .- -. - ...   .-- .- - . .-. .--. .-. --- --- ..-.   -... --- --- - ...   .... --- -- . -- .- -.. .   -- .. - - . -. ...   .- -. -..   .... .- -. -.. -.- -. .. -   ... -.-. .- .-. ..-.",
  "They sat in a heavy flat bottomed boat each holding a long crooked rod in his hands and eagerly waiting for a bite":
    "- .... . -.--   ... .- -   .. -.   .-   .... . .- ...- -.--   ..-. .-.. .- -   -... --- - - --- -- . -..   -... --- .- -   . .- -.-. ....   .... --- .-.. -.. .. -. --.   .-   .-.. --- -. --.   -.-. .-. --- --- -.- . -..   .-. --- -..   .. -.   .... .. ...   .... .- -. -.. ...   .- -. -..   . .- --. . .-. .-.. -.--   .-- .- .. - .. -. --.   ..-. --- .-.   .-   -... .. - .",
  "Yes there it was all quivering in the warm sunshine its blossom laden branches almost touching the long grass":
    "-.-- . ...   - .... . .-. .   .. -   .-- .- ...   .- .-.. .-..   --.- ..- .. ...- . .-. .. -. --.   .. -.   - .... .   .-- .- .-. --   ... ..- -. ... .... .. -. .   .. - ...   -... .-.. --- ... ... --- --   .-.. .- -.. . -.   -... .-. .- -. -.-. .... . ...   .- .-.. -- --- ... -   - --- ..- -.-. .... .. -. --.   - .... .   .-.. --- -. --.   --. .-. .- ... ...",
  "As proud as she was of Jonathan it was Alex who stayed on her mind for a long time after the phone call":
    ".- ...   .--. .-. --- ..- -..   .- ...   ... .... .   .-- .- ...   --- ..-.   .--- --- -. .- - .... .- -.   .. -   .-- .- ...   .- .-.. . -..-   .-- .... ---   ... - .- -.-- . -..   --- -.   .... . .-.   -- .. -. -..   ..-. --- .-.   .-   .-.. --- -. --.   - .. -- .   .- ..-. - . .-.   - .... .   .--. .... --- -. .   -.-. .- .-.. .-..",
  "But then maybe Alondra was one of those people who simply took a long time to warm to strangers":
    "-... ..- -   - .... . -.   -- .- -.-- -... .   .- .-.. --- -. -.. .-. .-   .-- .- ...   --- -. .   --- ..-.   - .... --- ... .   .--. . --- .--. .-.. .   .-- .... ---   ... .. -- .--. .-.. -.--   - --- --- -.-   .-   .-.. --- -. --.   - .. -- .   - ---   .-- .- .-. --   - ---   ... - .-. .- -. --. . .-. ...",
};

let sentence = "";
let morseCodeSentence = "";
const element = document.getElementById("user-input");
const titanic = document.getElementById("ship-left");
const cargoShip = document.getElementById("ship-right");
const shipContainer = document.getElementById("ships-container");
let timer = null;
let seconds = null;
let shipTimer = null;
let intViewportWidth = 0;
window.innerWidth > 1000
  ? (intViewportWidth = 1000)
  : (intViewportWidth = window.innerWidth);

const getRandomString = (setOfTestStrings) => {
  const string = Object.keys(setOfTestStrings);
  const index = Math.floor(Math.random() * string.length);
  const result = string[index];
  const morseResult = setOfTestStrings[result];

  sentence = result;
  morseCodeSentence = morseResult;

  return result;
};

const playEasy = () => {
  resetShips();
  getRandomString(easySets);
  runTimer();
  document.getElementById("string-output").innerHTML = sentence;
  seconds = 0;
  moveShips(200);
};

const playMedium = () => {
  resetShips();
  getRandomString(mediumSets);
  runTimer();
  document.getElementById("string-output").innerHTML = sentence;
  seconds = 0;
  moveShips(100);
};

const playHard = () => {
  resetShips();
  getRandomString(hardSets);
  runTimer();
  document.getElementById("string-output").innerHTML = sentence;
  seconds = 0;
  moveShips(50);
};

const testingFunction = () => {
  if (document.getElementById("user-input").value == getMorseCodeSlice()) {
    if (document.getElementById("user-input").value == morseCodeSentence) {
      success();
    }
    document.getElementById("user-input").style.backgroundColor =
      "rgba(0, 255, 0, 0.7)";
    // document.getElementById("user-input").style.backgroundColor = "green";
  } else {
    document.getElementById("user-input").style.backgroundColor =
      "rgba(255, 0, 0, 0.7)";
  }
  getInputLength();
  getMorseCodeSlice();
};

// gets length output for dynamic content
const getInputLength = () => {
  const input = document.getElementById("user-input").value;
  return input.length;
};

const getMorseCodeSlice = () => {
  const length = getInputLength();
  const morseCodeSlice = morseCodeSentence.slice(0, length);
  return morseCodeSlice;
};

runTimer = () => {
  const increaseTimer = () => {
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
  };
  timer = setInterval(increaseTimer, 1000);
};

const moveShips = (speed) => {
  let amount = 1;

  const increaseAmount = () => {
    amount++;
    titanic.style.position = "relative";
    cargoShip.style.position = "relative";
    titanic.style.left = `${amount}px`;
    cargoShip.style.right = `${amount}px`;
    // checkCollision();
    console.log(amount);
    console.log(intViewportWidth - 500 - amount * 2);
    // had to correct viewportWidth as actuall width is 17px less when console is forcing div containing ships < 1000px
    if (intViewportWidth - 500 - amount * 2 <= 0) {
      failure();
    }
  };

  // checkCollision = () => {
  //     if(intViewportWidth - 500 - amount < 0) {
  //         alert("Boom!")
  //     }
  // }
  // shipTimer = setInterval(() => amount++, 100);
  shipTimer = setInterval(increaseAmount, speed);
};

const resetShips = () => {
  clearInterval(timer);
  clearInterval(shipTimer);
};

const success = () => {
  clearInterval(timer);
  clearInterval(shipTimer);
  alert(`Great job!!! It took you ${seconds} seconds`);
};

const failure = () => {
  clearInterval(timer);
  clearInterval(shipTimer);
  // alert("Booooooom!!!!!!!!!")
  shipContainer.classList.add("boom");
};

element.onkeyup = testingFunction;
