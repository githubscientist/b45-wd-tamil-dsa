class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        // create a new node
        let newNode = new Node(data);

        // check whether the linked list is empty
        if (this.head == null) {
            // linked list is empty
            this.head = newNode;
        } else {
            // linked list is not empty
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    toString() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        console.log(nodes);
    }

    pop() {
        if (this.head == null) {
            // do nothing
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            let thead = this.head;
            while (thead.next.next !=null) {
                thead = thead.next;
            }
            thead.next = null;
        }
    }

    length() {
        // create a dummy head
        let thead = this.head;

        // create a variable to keep track of the number of nodes
        let nodes = 0;

        while (thead != null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }

    middle() {
        
    }

    unshift(data) {
        // create a new node
        let newNode = new Node(data);

        newNode.next = this.head;

        // update the head pointer
        this.head = newNode;
    }

    shift() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    insert(pos, data) {
        let listLength = this.length();

        if (pos >= 1 && pos <=listLength+1) {
            // do the insertion
            // if the pos is 1, insert the node in the head
            if (pos == 1) {
                this.unshift(data);
            } else if (pos == listLength + 1) {
                // insert in the tail node
                this.push(data);
            } else {
                // create a temp head
                let thead = this.head;

                // move the temp head pos-2 times
                for (let i = 0; i < pos - 2; i++){
                    thead = thead.next;
                }

                // insert the new node to the next of thead
                // create a new node
                let newNode = new Node(data);

                // make the newNode.next as thead.next
                newNode.next = thead.next;

                // make the thead.next as newNode
                thead.next = newNode;
            }
        } else {
            console.log('insertion not possible');
        }
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(5);
list.push(7);
list.push(10);
list.pop();
list.pop();
list.pop();
list.push(6);
list.push(7);
list.push(10);
list.pop();
list.unshift(2);
list.unshift(1);
list.shift();
list.shift();
list.shift();

console.log('original list is: ');
list.toString();

list.insert(1, 2);

console.log('after insertion: ');
list.toString();
console.log(`Length of the list: ${list.length()}`);


/*
    list
        LinkedList {
            head: Node {
                data: 3,
                next: Node {
                    data: 4,
                        next: Node {
                            data: 5,
                            next: null
                        }
                }
            }
        }

    newNode
        Node {
            data: 5,
            next: null
        }
    
    thead = thead.next x
    
    thead = Node {
                    data: 4,
                    next: Node {
                        data: 5,
                        next: null
                    }
                }
*/
