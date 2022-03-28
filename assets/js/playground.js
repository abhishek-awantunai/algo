class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.length) { 
            this.head = node; 
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.length++;
        return this.head;
    }
}

const list = new List();
list.push(10);
console.log(list);