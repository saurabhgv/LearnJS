class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }
}
let myObj=new LinkedList(50)
myObj.push(20)
myObj.push(30)
myObj.push(40)
console.log(myObj.get(2).value)
// console.log(myObj)