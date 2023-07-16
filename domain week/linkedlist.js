class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    insert(data){
        let node=new Node(data);
        if(this.tail==null){
            this.head=node
            this.tail=node
            this.size++
        }else{
            let current=this.tail;
            current.next=node;
            this.tail=node;
            this.size++
        }
    }
    insertHead(data){
        let node = new Node(data);
        if(!this.head){
            this.head=node;
            this.root=node;
            this.size++
        }else{
            let current=this.head;
            node.next=current;
            this.head=node;
            this.size++
        }
    }
    delete(data){
        let current=this.head;
        if(!current){
            return 'values not found'
        }
        if(current.data==data){
            this.head=current.next;
            this.size--
        }
        while(current.next){
            let prev=current;
            current=current.next
            if(current.data==data){
                prev.next=current.next;
                this.size--
            }
        }
    }
    display(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}

const ll=new LinkedList()
ll.insert(15)
ll.insert(25)
ll.insert(35)
ll.insert(45)
ll.insertHead(143)
ll.insertHead(12)
ll.insertHead(102)
ll.insert(450)
ll.delete(45)
ll.delete(102)
ll.delete(450)
ll.display()

console.log(ll.size);