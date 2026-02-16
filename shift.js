class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(value){
        let myObj=new Node(value);
        this.head=myObj;
        this.tail=this.head;
        this.length++;
    }

    unshift(value){
        let myObj=new Node(value)
        if(!this.head){
            this.head=myObj;
            this.tail=myObj;
        }
        else{
            myObj.next=this.head
            this.head=myObj;

        }
        this.length++
        return this
    }
}