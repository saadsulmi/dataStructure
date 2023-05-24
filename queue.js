class Queue{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class queueList{
    constructor(){
        this.rear=null;
        this.front=null;
        this.size=0;
    }

    enqueue(data){
        const node=new Queue(data);
        if(!this.front){
            this.front=node;
            this.rear=node;
            this.size++
        }
        else{
            let current=this.rear;
            current.next=node;
            this.rear=node;
            this.size++
        }
    }
    dequeue(){
        let current=this.front;
        this.front=current.next;
        this.size--;
    }
    showList(){
        let current=this.front;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const Q=new queueList();
Q.enqueue(10);
Q.enqueue(20);
Q.enqueue(30);
Q.enqueue(40);
Q.dequeue();
Q.dequeue();
Q.showList()