// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
    }

    // push
    push(data) {
        this.items.push(data);
    }

    // pop
    pop() {
        // allow the pop when the stack
        // is not empty
        if (!this.isEmpty()) {
            // do the pop
            this.items.pop();
        }
    }

    // tos
    tos() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    // isEmpty
    isEmpty() {
        return this.items.length == 0;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let words = userInput[0].split(' ');

  // create a new stack
  let stack = new Stack();

  // traverse through the words array
  for (let word of words) {
    // for every word in the words array
    // check if the stack is empty
    if (stack.isEmpty()) {
      // if empty, push the word to the stack
      stack.push(word);
    } else {
      // if not stack is empty
      // check if the current word is equal to the top of the stack
      if (word == stack.tos()) {
        // we should not push the current word (ignore)
        // pop the stack
        stack.pop();
      } else {
        // if the current word and the tos are not equal
        // push the word to the stack
        stack.push(word);
      }
    }
  }

  if (stack.isEmpty()) {
    console.log(-1);
  } else {
    console.log(stack.items.join(' '));
  }

  //end-here
});