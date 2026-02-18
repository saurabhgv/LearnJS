class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(value){
        let myObj=new Node(value)
        this.head=myObj
        this.tail=myObj
        this.length=1
    }

    push(value){
        let myObj=new Node(value)
        if(!this.head){
            this.head=myObj
            this.tail=myObj
        }
        else{
            this.tail.next=myObj;
            this.tail=myObj
        }
        this.length++

    }

    get(index){
        if(index<0 || index>=this.length) return undefined
        let temp=this.head
        for(let i=0;i<index;i++){
            temp=temp.next
        }
        return temp
    }

    // set(index,value){
    //     let temp=this.get(index)
    //     temp.value=value
    //     temp.=temp.next
    //     return true
    //     return this

    // }
}

let myObj=new LinkedList(10)
myObj.push(20)
myObj.push(30)
myObj.push(40)
// console.log(myObj.set(2,90))
console.log(myObj)
console.log(myObj.get(2))