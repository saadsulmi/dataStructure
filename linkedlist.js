class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }  
    insertHead(data){
        const node = new Node(data);
        if(this.head===null){
            this.head=node;
            this.tail=node
            this.size++
        }
        else{
            node.next=this.head;
            this.head=node;
            this.size++
        }
    }
    addValue(data){
        const node=new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
            this.size++;
            return;
        }
        let current=this.tail;
        current.next=node;
        this.tail=node;
        this.size++;
    }
    replaceList(pos,data){
        let count=1;
        let current=this.head;
        while(current){
            if(count===pos){
                current.data=data;
                return;
            }
            current=current.next
            count++
        }
    }
    printList(){
        let temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}

const list=new linkedList();
list.insertHead(30);
list.insertHead(50);
list.insertHead(60);
list.addValue(99);
list.replaceList(3,143);
list.printList();