class hashNode{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null;
    }
}

class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    
    hash(key){
        let limit=key.length;
        let sum=0;
        for(let i=0;i<limit;i++){
            sum+=key.charCodeAt(i);
        }
        return sum%this.size;
    }

    put(key,value){
        let index=this.hash(key);
        let bucket=this.table[index];
        const node=new hashNode(key,value);
        if(!bucket){
            this.table[index]=node;
        }else{
            let current=this.table[index];
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
    }
    get(key){
        let index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            while(bucket){
                if(bucket.key===key){
                    console.log(bucket.value);
                    return bucket.value;
                }else{
                    bucket=bucket.next;
                }
                if(bucket===null){
                    console.log("no values found");
                }
            }
        }else{
            console.log("no values found");
        }
    }

    delete(key) {
        const index = this.hash(key);
        let bucket = this.table[index];
      
        if (!bucket) {
          return undefined;
        }
      
        if (bucket.key === key) {
          this.table[index] = bucket.next;
          return;
        }
      
        let previous = bucket;
        let current = bucket.next;
      
        while (current !== null) {
          if (current.key === key) {
            previous.next = current.next;
            return;
          }
          previous = current;
          current = current.next;
        }
    }

    display(){
        for(let x of this.table){
            if(x){
                if(x.next!=null){
                    let current=x;
                    while(current){
                        console.log(current.value);
                        current=current.next;
                    }
                }else{
                    console.log(x.value);
                }
            }
        }
    }
      

}

const ht=new hashTable(10);
ht.display();
