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
        let hashCode= sum%this.size;
        if(!this.table[hashCode]){
            return hashCode;
        }else{
            let i=1;
            while(this.table[hashCode]&&i<this.size&&this.table[hashCode][0]!==key){
                sum=sum+i*i;
                hashCode=(sum)%this.size
                i++
            }
            if(i>=(this.size)){
                return undefined;
            }else{
                return hashCode;
            }   
        }
    }

    put(key,value){
        let index=this.hash(key);
        console.log(index);
        let bucket=this.table[index];
        this.table[index]=[key,value];
    }
    get(key){
        let index=this.hash(key);
        console.log(this.table[index])
    }
    delete(key){
        let index=this.hash(key);
        this.table[index]=undefined;
    }
    display(){
        for(let x of this.table){
            if(x){
                console.log(x)
            }
        }
    }

}

const ht=new hashTable(20);
ht.put("name","saad");
ht.put("naem","saed");
ht.put("neam","betrayed");
ht.put("name","jaan");
ht.display()

