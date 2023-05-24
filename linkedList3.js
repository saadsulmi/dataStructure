 class Node{
    constructor(data,next=null,prev=null){
        this.data=data;
        this.next=next;
      
    }
 }

 class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    insertHead(data){
        const node=new Node(data,this.head,null);
        if(this.head===null){
            this.head=node;
            this.tail=this.head;
            this.size++
        }else{
            this.head=node;
            let current=this.head
            while(current.next){
                current=current.next
            }
            this.tail=current;
            this.size++
        }
    }
    insertValue(data){
        const node=new Node(data);
        
        if(this.head===null){
            this.head=node;
            this.tail=this.head;
            this.size++
        }else{
            let current;
            current=this.tail;
            current.next=node;
            this.tail=node;
            this.size++
        }
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

    showTail(){
        console.log("tail data is : "+this.tail.data);
        
    }

    showHead(){
        console.log("head data is : "+this.head.data);
       
    }

    deleteValue(value) {
        if(!this.head){
            console.log("no elements found");
            return
        }
         let current=this.head;
         let previous=null;
            

            if(current!==null&&current.data===value){
                this.head=current.next
                this.size--
                return;
            }
            while(current!==null&&current.data!==value){
                previous=current;
                current=current.next;
            }
            if(current===null){
                return;
            }
            if(current===this.tail){
                this.tail=previous;
                previous.next=null;
                this.size--
                return;
            }
            previous.next=current.next;
            current=null;
            this.size--
            return;
        
     }
     insertAfter(value,data){
        const node=new Node(data);
        let current,previous,next;
        current=this.head;
        if(current.data===value){
            previous=current;
            current=current.next;
            previous.next=node;
            node.next=current;
            this.size++
            return;
        }
        else{
            while(current.data!==value){
                current=current.next;
                next=current.next;
            }
            if(current===this.tail){
                current.next=node;
                this.tail=node;
                this.size++;
                return;
            }else{
                current.next=node;
                node.next=next;
                this.size++
                return;
            }

        }
     }


 }

 const array=[3,2,4,6,3,8,10];

 const ll=new linkedlist();
 ll.insertHead(333)
 ll.insertArray(array);
 ll.insertAfter(3,69);
 ll.insertAfter(10,100);
 ll.insertAfter(6,99);
 ll.insertAfter(100,9446);
 ll.insertValue(25)
 ll.insertValue(15)
 ll.insertValue(99)
ll.print()



