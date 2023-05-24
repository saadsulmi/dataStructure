class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
        current = current.children.get(char);
      }
      current.isEndOfWord = true;
    }
  
    findWordsWithPrefix(prefix) {
      const words = [];
      let current = this.root;
      for (const char of prefix) {
        if (!current.children.has(char)) {
          return words;
        }
        current = current.children.get(char);
      }
      this._findWords(current, prefix, words);
      return words;
    }
  
    _findWords(node, prefix, words) {
      if (node.isEndOfWord) {
        words.push(prefix);
      }
      for (const [char, child] of node.children) {
        this._findWords(child, prefix + char, words);
      }
    }
  }

const tr=new Trie();
tr.insert("saadsulmi");
console.log(tr.findWordsWithPrefix("saad"));