class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insertAt(index,data){
       
       const node=new Node(data);
       let current=this.head
       if(index===0){
        current.prev=node;
        this.head=node;
        this.size++
        return;
       }
       let count=1;
       while(count<index){
        current=current.next
        count++
       }
       if(current===this.tail){
        current.next=node
        node.prev=current
        this.tail=node;
        this.size++
        return
       }
       else{
        let next=current.next;
        current.next=node;
        node.prev=current;
        node.next=next;
        next.prev=node;
        this.size++
        return
       }

    }
    insertHead(data){
       
        const node = new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
            this.size++
            return
        }
        let current=this.head
        node.next=current;
        current.prev=node;
        this.head=node

    }
    insertTail(data){
        const node = new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }
        let current=this.tail;
        current.next=node;
        node.prev=current;
        this.tail=node;
    }

    printReverse(){
        let current=this.tail;
        while(current){
            console.log(current.data);
            current=current.prev;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    

}
const list=new linkedList();

list.insertHead(101);
list.insertTail(40);
list.insertTail(70);
list.insertHead(1);
list.insertAt(2,50)
list.insertAt(4,99)
list.print();
