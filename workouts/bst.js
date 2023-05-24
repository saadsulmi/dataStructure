class binaryNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    
    insert(data){
        let current=this.root;
        const node=new binaryNode(data);
        if(!current){
            this.root=node
        }
        while(current){
            if(current.data>data){
                if(current.left===null){
                    current.left=node;
                    return;
                }
                current=current.left;
            }
            else if(current.data<data){
                if(current.right===null){
                    current.right=node;
                    return;
                }
                current=current.right;
            }else{
                return;
            }
        }
    }

    contains(target){
        let current=this.root;
        while(current){
            if(current.data===target){
                return true;
            }
            else if(current.data>target){
                current=current.left;
            }
            else{
                current=current.right;
            }
        }
        return false
    }

    nearestValue(value){
        let current=this.root;
        let nearest=current.data;
        while(current){
            if(Math.abs(current.data-value)<Math.abs(nearest-value)){
                nearest=current.data;
            }
            if(current.data>value){
                current=current.left;
            }else if(current.data<value){
                current=current.right;
            }else{
                return "same value found";
            }
        }
        return nearest;
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

    isValidate(current=this.root,min=-Infinity,max=Infinity){
        if(!current){
            return true
        }
        if(current.data<=min||current.data>=max){
            return false
        }
        return this.isValidate(current.left,min,current.data)&&this.isValidate(current.right,current.data,max);
    }

    remove(data){
        let current=this.root;
        this.removeHelper(data,current,null)
    }
    removeHelper(target,current,parent){
        while(current){
            if(current.data>target){
                parent=current;
                current=current.left;
            }else if(current.data<target){
                parent=current;
                current=current.right;
            }else{
                if(current.right!=null&&current.left!=null){
                    current.data=this.getMinValue(current.right);
                    this.removeHelper(current.data,current.right,current);
                }else{
                    if(parent===null){
                        if(current.left===null){
                            this.root=current.right;
                        }else{
                            this.root=current.left
                        }
                    }else{
                        if(parent.right===current){
                            if(current.right==null){
                                parent.right=current.left;
                            }else{
                                parent.right=current.rigth;
                            }
                        }else{
                            if(current.right===null){
                                parent.left=current.left;
                            }else{
                                parent.left=current.right;
                            }
                        }
                    }
                }
             return;
            }
        }
    }
    getMinValue(current){
        if(current.left===null){
            return current.data;
        }
        else{
            return this.getMinValue(current.left);
        }

    }

}

const bst=new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(60);
bst.insert(80);
bst.insert(40);
bst.remove(80);
bst.inOrder();
// console.log(bst.contains(70));
// console.log(bst.nearestValue(20));
// console.log(bst);
