class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top == null) {
            this.top = new Node(data);
        } else {
            // stack is not empty
            let newNode = new Node(data);
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    toString() {
        let nodes = [];
        let tTop = this.top;

        while (tTop != null) {
            nodes.push(tTop.data);
            tTop = tTop.next;
        }

        return nodes;
    }

    pop() {
        if (this.top != null) {
            this.top = this.top.next;
        }
    }

    isEmpty() {
        return this.top == null;
    }

    tos() {
        return this.top ? this.top.data : null;
    }
}

module.exports = Stack;