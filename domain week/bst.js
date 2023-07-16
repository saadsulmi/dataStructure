class Node{
    constructor(data=null){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class bst{
    constructor(){
        this.root=null;
    }
    insert(data){
        const node= new Node(data);
         let current=this.root;
        if(!current){
            this.root=node;
            this.size++;
            return;
        }else{
            while(current){
                if(current.data>data){
                    if(current.left===null){
                        current.left=node;
                        this.size++;
                        return;
                    }
                    current=current.left;
                }else if(current.data<data){
                    if(current.right===null){
                        current.right=node;
                        this.size++;
                        return;
                    }
                    current=current.right;
                }else{
                    return;
                }
            }
        }
        
        

    }
    preOrder(){
        this.preOrderHelper(this.root);
    }
    preOrderHelper(current){
        if(current){
            console.log(current.data);
            this.preOrderHelper(current.left);
            this.preOrderHelper(current.right);
        }
    }
}

const bsts=new bst()
bsts.insert(4);
bsts.insert(6);
bsts.insert(3);
bsts.insert(9);
bsts.preOrder()
// console.log(bsts);