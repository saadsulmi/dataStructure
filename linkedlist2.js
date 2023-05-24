class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    insertHead(data){
        const node=new Node(data,this.head);
        this.head=node;
        this.size++
    }
    insertAt(data,pos){

        if(pos>0&&pos>this.size){
            return;
        }
        if(pos===0){
            const node = new Node(data,this.head);
            this.head=data;
            return;
        }  
        const node=new Node(data);
        let current,previous;
        let count=0 
        current=this.head

        while(count<pos){
            previous=current;
            current=current.next;
            count++
        }
        node.next=current;
        previous.next=node;
        this.size++

    }
    insertTail(data){
        const node=new Node(data);
        let current;
        if(!this.head){
            this.head=node;
            this.size++
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
            this.size++;
        }
    }
    deleteAt(index){
        if(index>0&&index>this.size){
            return
        }
        let current,previous;
        if(index===0){
            current=this.head;
            let next=current.next;
            this.head=null;
            this.head=next;
        }else{
            current=this.head;
            let count=0
            while(count<index){
                previous=current;
                current=current.next;
                count++
            }
            
            previous.next=current.next
            current=null
        }
    }
    
    insertArray(array){
        for(let i=0;i<array.length;i++){

        }
    }
    //skip start
    
    //skip end

    print(){
        let current=this.head;
            while(current){
                console.log(current.data);
                current=current.next;
            }
    }
}

const ll=new linkedList();
ll.insertTail(1);
ll.insertTail(2);
ll.insertTail(3);
ll.insertTail(4);
ll.insertTail(5);
ll.insertTail(6);
ll.insertTail(7);
ll.insertAt(55,2);

ll.print()


