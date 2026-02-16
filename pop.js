class Node{
    constructor(value){
        this.head
        this.tail
    }
}

class LinkedList{
    constructor(value){
    let myObj=new Node(value)
    this.head=myObj;
    this.tail=this.head
    }

pop(){
    if(! this.head) return undefined

    else{
        this.temp=this.head
        this.prev=this.head

        while(this.temp.next){
            prev=this.temp;
            temp=this.temp.next
        }

        this.tail=prev
        this.tail.next=null
        this.length--

        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return temp
    }
    
}
}