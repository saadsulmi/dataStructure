class hashTable{
    constructor(size){
        this.size=size;
        this.table=new Array(size);
    }

    hash(key){
        let limit=key.length;
        let sum=0;
        for(let i=0;i<limit;i++){
            sum+=key.charCodeAt(i);
        }
        let hashCode=sum%this.size;
        if(!this.table[hashCode]){
            return hashCode;
        }
        else{
            let hashCode2=this.hash2(hashCode);
            let i=1;
            while(this.table[hashCode]&&i<this.size&&this.table[hashCode][0]!==key){
                hashCode=(hashCode+hashCode2*i)%this.size;
                i++;
            }
            if(i>=this.size){
                return undefined
            }else{
                return hashCode;
            }
        }
    }
    hash2(hashCode){
        return (17-((hashCode)%17));
    }

    put(key,value){
        let index=this.hash(key);
        this.table[index]=[key,value];
        console.log(index);
    }
    get(key){
        let index=this.hash(key);
        console.log(this.table[index][1]);
    }
    display(){
        for(let x of this.table){
            if(x){
                console.log(x[1]);
            }
        }
    }
}

const ht=new hashTable(20);
ht.put("name","jaan");
ht.put("nmea","saad");
ht.put("mean","ls");
ht.put("amen","love");
ht.put("age","456");
ht.put("aemn","sdf");
ht.put("mane","lodee");
ht.display()

