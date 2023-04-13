const Stack = require('./Stack');

// write a function to reverse a string using Stack datastructure

function reverseString(stringInput) {
    // 1. create a new stack
    let stack = new Stack();

    // let reversed = '';

    // 2. traverse the string
    for (let char of stringInput) {
        // for every character in the string,
        // push the character to the stack
        stack.push(char);
    }

    return stack.toString().join('');
    
    // // 3. while the stack is not empty
    // while (!stack.isEmpty()) {
    //     // do the following
    //     // 4. print the top of the stack
    //     reversed += stack.tos();

    //     // 5. pop the stack
    //     stack.pop();
    // }

    // return reversed;
    
}

let stringInput = 'apple';

console.log(`reverse of the string '${stringInput}' is '${reverseString(stringInput)}'`);