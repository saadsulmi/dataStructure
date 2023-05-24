class trieNode {
    constructor() {
      this.children = new Map();
    }
  }

class prefixTrie{
    constructor(){
        this.root=new trieNode();
        this.endSymbol=false;
    }

    trie(str){
        this.populatePrefixString(str);
    }
    populatePrefixString(str){
        for(let i=0;i<str.length;i++){
            this.insertSubstring(i,str);
        }
    }
    insertSubstring(index,string){
        let node=this.root;
        for(let i=0;i<=index;i++){
            let letter=string.charAt(i);
            if(!node.children.has(letter)){
                let newNode=new trieNode();
                node.children.set(letter,newNode);
            }
            node=node.children.get(letter);
        }
        node.children.set(this.endSymbol,null );
    }

    contains(str){
        let node=this.root;
        for(let i=0;i<str.length;i++){
            let letter=str.charAt(i);
            if(!node.children.has(letter)){
                return false;
            }
            node=node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    } 

    prediction(string){
        let node=this.root;
        let result=[];
        for(let i=0;i<string.length;i++){
            let letter=string.charAt(i);
            if(!node.children.has(letter)){
                return result;
            }
            node = node.children.get(letter);
        }
        this.dfs(node,string,result);
        return result;
    }

    dfs(current,string,result){
        if(current.children.has(this.endstr)){
            result.push(string);
        }
        for(let [letter,childNode] of current.children){
            if(letter!=this.endstr){
                let newString = string+letter;
                this.dfs(childNode,newString,result);
            }
        }
    }
    
}
let str1="saad sulmi"
let str2="hadi haneef"
const tr=new prefixTrie();
tr.trie(str1);
tr.trie(str2);
console.log(tr);