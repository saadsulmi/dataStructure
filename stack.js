//stack

class Stack{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class stackList{
    constructor(){
        this.top=null;
        this.size=0;
    }
    push(data){
        const stack=new Stack(data);
        if(!this.top){
            this.top=stack;
            this.size++
        }
        else{
            let current=this.top;
            stack.next=current;
            this.top=stack;
            this.size++
        }
    }
    pop(){
        let current=this.top;
        this.top=current.next;
    }
    print(){
        let current=this.top;
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}

const sl=new stackList();
sl.push(8);
sl.push(10);
sl.push(20);


sl.print();
