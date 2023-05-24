class trieNode {
    constructor() {
      this.children = new Map();
    }
  }

class suffixTrie{
    constructor(){
        this.root=new trieNode();
        this.endSymbol=false;
    }

    trie(str){
        this.populateSuffixString(str);
    }
    populateSuffixString(str){
        for(let i=0;i<str.length;i++){
            this.insertSubstring(i,str);
        }
    }
    insertSubstring(index,string){
        let node=this.root;
        for(let i=index;i<string.length;i++){
            let letter=string.charAt(i);
            if(!node.children.has(letter)){
                let newNode=new trieNode();
                node.children.set(letter,newNode);
            }
            node=node.children.get(letter);
        }
        node.children.set(this.endSymbol,null);
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
    
}
let str="saadsulmi"
const tr=new suffixTrie();
tr.trie(str);
console.log(tr.contains("mi"));