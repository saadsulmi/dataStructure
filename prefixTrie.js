class trieNode{
    constructor(){
        this.child=new Map();
    }
}

class trie{
    constructor(){
        this.root=new trieNode();
        this.endString=false;
    }

    insert(str){
        this.populate(str)
    }

    populate(str){
        for(let i=0;i<str.length;i++){
            this.subString(i,str);
        }
    }
    subString(idx,str){
        let node=this.root;
        for(let i=0;i<=idx;i++){
            let letter = str.charAt(i);
            if(!node.child.has(letter)){
                let newNode=new trieNode();
                node.child.set(letter,newNode);
            }
            node=node.child.get(letter);
        }
        node.child.set(this.endString,null);
    }

    get(str){
        let node = this.root;
        for(let i=0;i<str.length;i++){
            let letter=str.charAt(i);
            if(node.child.has(letter)){
                node=node.child.get(letter);
            }else{
                return false;
            }
        }
        return node.child.has(this.endString);
    }

    prediction(string){
        let node=this.root;
        let result=[];
        for(let i=0;i<string.length;i++){
            let letter=string.charAt(i);
            if(!node.child.has(letter)){
                return result;
            }
            node = node.child.get(letter);
        }
        this.dfs(node,string,result);
        return result;
    }

    dfs(current,string,result){
        if(current.child.has(this.endString)){
            result.push(string);
        }
        for(let [letter,childNode] of current.child){
            if(letter!=this.endString){
                let newString = string+letter;
                this.dfs(childNode,newString,result);
            }
        }
    }
}

const t=new trie();
t.insert("ajmal");
t.insert("ajax");
t.insert("saad");
console.log(t.prediction("aj"));