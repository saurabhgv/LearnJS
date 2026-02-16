class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        let myObj=new Node(value)
        this.head=myObj
        this.tail=this.head
        this.length=1
    }

    push(value){
        const myObj=new Node(value)
        if(!this.head){
                this.head=myObj;
                this.tail=myObj;
            }
        else{
            this.tail.next=myObj
            this.tail=myObj

        }
        this.length++;
        return this
    }
}

let myObj=new LinkedList(7)
myObj.push(4)