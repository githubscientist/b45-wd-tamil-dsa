// template for node
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
}

let list = new LinkedList();

let newNode1 = new Node(5);
list.head = newNode1;

let newNode2 = new Node(7);
list.head.next = newNode2;

let newNode3 = new Node(8);
list.head.next.next = newNode3;

console.log(list);




// newNode1.next = newNode2;
// console.log(typeof(newNode1));

/*
    list: LinkedList {
        head: Node {
            data: 5,
            next: Node {
                data: 7,
                next: Node {
                    data: 8,
                    next: null
                }
            }
        }
    }


    newNode1: Node {
        data: 5,
        next: Node {
            data: 7,
            next: null
        }
    }
*/