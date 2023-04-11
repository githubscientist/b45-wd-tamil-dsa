// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let size = parseInt(userInput[0]);
    let word = userInput[1];
    let result = '';

    // arrange the characters within the string in alphabetical order
    // Method1: built-in sort method from array
    // let chars = word.split('');

    // chars.sort();

    // console.log(chars.join(''));

    // Method2: using counting sort
    let chars = {};

    for (let index = 0; index < word.length; index++){
        chars[word.charCodeAt(index)] = 0;
    }

    for (let index = 0; index < word.length; index++){
        chars[word.charCodeAt(index)]++;
    }

    for (let key of Object.keys(chars)) {
        result += (String.fromCharCode(key)).repeat(chars[key]);
    }

    console.log(result);

  //end-here
});