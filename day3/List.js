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

list.toString();


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
