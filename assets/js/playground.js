/*
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail= newNode;
        }
        this.length++;
        return this;
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push(22);
list.push(2);
list.push(77);
list.push(6);
list.push(43);
list.push(76);
list.push(89);
console.log(list.getNodeAt(7));