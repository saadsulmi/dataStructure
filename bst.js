class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
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

    insertArray(array){
        for(let i=0;i<array.length;i++){
            this.insert(array[i]);
        }
    }

    inludes(data){
        let current=this.root;
        while(current){
            if(current.data===data){
                return true;
            }
            if(current.data>data){
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }

    removeHelper(target,current,parent){
        while(current){
            if(target<current.data){
                parent=current;
                current=current.left;
            }else if(target>current.data){
                parent=current;
                current=current.right;
            }else{
                if(current.right!==null&&current.left!==null){
                    current.data=this.getMinValue(current.right);
                    this.removeHelper(current.data,current.right,current);
                }else{
                    if(parent===null){
                        if(current.right===null){
                            this.root=current.left;
                        }else{
                            this.root=current.right;
                        }
                    }else{
                        if(parent.left===current){
                           if(current.right===null){
                            parent.left=current.left;
                           }else{
                            parent.left=current.right;
                           }
                        }else{
                            if(parent.right===current){
                                if(current.right===null){
                                 parent.right=current.left;
                                }else{
                                 parent.right=current.right;
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    }
    getMinValue(currentNode){
        if(currentNode.left===null){
            return currentNode.data;
        }else{
            return this.getMinValue(currentNode.left);wsda
        }
    }

    search(target){
        let current=this.root;
        if(this.root==null){
            return "BST empty";
        }
        while(current){
            if(current.data===target){
                return true;
            }
            else if(current.data>target){
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }



    remove(data){
        this.removeHelper(data,this.root,null);
    }

    inOrder(){
        this.inOrderHelper(this.root);
    }
    inOrderHelper(current){
        if(current){
            this.inOrderHelper(current.left);
            console.log(current.data);
            this.inOrderHelper(current.right);
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
    }postOrder(){
        this.postOrderHelper(this.root);
    }
    postOrderHelper(current){
        if(current){
            this.postOrderHelper(current.left);
            this.postOrderHelper(current.right);
            console.log(current.data);
        }
    }

    findClosest(target){
        let current=this.root;
        let closest=current.data;
        while(current){
            if(Math.abs(target-current.data)<Math.abs(target-closest)){
                closest=current.data;
            }
            if(current.data>target){
                current=current.left;
            }else if(current.data<target){
                current=current.right;
            }else{
                return "same value found";
            }
        }
        return closest;
    }
    
    isValidBST(current=this.root, min = -Infinity, max = Infinity) {
        if (!current) {
          return true;
        }
        if (current.data <= min || current.data >= max) {
          return false;
        }
        return (this.isValidBST(current.left, min, current.data) && this.isValidBST(current.right, current.data, max));
      }
    

}
const bst=new BinarySearchTree();
bst.insertArray([3,4,9,5,1,2,7])
bst.preOrder();
