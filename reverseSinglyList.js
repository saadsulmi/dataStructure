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

    insertArray(array) {
        let limit = array.length
        for (let i = 0; i < limit; i++) {
            let node = new Node(array[i]);

            if (!this.head) {
                this.head = node;
                this.tail = this.head
            } else {
                let current;
                current = this.tail;
                current.next = node;
                this.tail=node;
            }
            this.size++
        }
    }
    print(){
        let current=this.head;
            while(current){
                console.log(current.data);
                current=current.next;
            }
    }

    reverseList(){
        let current=this.head;
        this.tail=current;
        let prev=null,next;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev
    }

}
const array=[10,20,30,40,50,40];
const list=new linkedList();
list.insertArray(array);
// list.print();
list.reverseList();


