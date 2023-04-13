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

module.exports = Stack;