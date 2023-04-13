const Stack = require('./Stack');

// let stack = new Stack();
// let stack1 = new Stack();

// console.log(stack);
// console.log(stack1);

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(6);
stack.pop();
stack.pop();
stack.pop();

stack.push(6);
stack.push(10);

console.log(stack.tos());