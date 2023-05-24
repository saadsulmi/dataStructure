class hashTable{
    constructor(size){
        this.size=size;
        this.table=new Array(size);
    }


    hash(key){
        let limit=key.length;
        let sum=0;
        for(let i = 0;i < limit;i++){
            sum+=key.charCodeAt(i);
        }
        return sum%this.size;
    }

    put(key,value){
        let index=this.hash(key);
        let bucket=this.table[index];
        if(!bucket){
            this.table[index]=[key,value];
        }else{
            while(bucket&&bucket[0]!==key){
                index++
                index=(index)%this.size;
                bucket=this.table[index];
            }
            this.table[index]=[key,value];
        }
    }
    get(key){
        let index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            if(bucket[0]===key){
                console.log(bucket[1]);
            }else{
                while(bucket[0]!==key&&index<this.size){
                    index++;
                    index=index%this.size;
                    bucket=this.table[index];
                }
                if(bucket[0]===key){
                    return bucket[1];
                }else{
                    return undefined;
                }
            }
        }
    }
    delete(key){
        let index=this.hash(key);
        const bucket=this.table[index];  
    }

    display(){
        for(let y of this.table){
          console.log(y[1]);
        }
    }

}

const ht=new hashTable(6);
ht.put("name","saad");
ht.put("amen","moonji");
ht.put("amn","love");
ht.put("am","hehe");
ht.put("nmae","moonji");
ht.put("eamn","moonji");
ht.put("am","f*** me")
console.log(ht)

