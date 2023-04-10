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
    let numbers = userInput[1].split(' ').map(number => parseInt(number));
    
    let table = {};

    for (let index = 0; index < numbers.length; index++){
        table[numbers[index]] = 0;
    }

    for (let index = 0; index < numbers.length; index++){
        table[numbers[index]]++;
    }

    // find the minimum freq value from the table object
    // iterate through the object
    // for (let value of Object.values(table)) {
    //     console.log(value);
    // }
    let minimumFreq = Math.min(...Object.values(table));

    let result = [];

    for (let [key, value] of Object.entries(table)) {
        if (value == minimumFreq) {
            result.push(key);
        }
    }

    // result = result.map(number => parseInt(number));

    result.sort((a, b) => b - a);
    
    console.log(result.join(' '));

    // print all the keys that matches the minimum freq value

    // console.log(Object.entries(table));

  //end-here
});