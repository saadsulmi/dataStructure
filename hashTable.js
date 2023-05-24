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
        
        const bucket=this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]];
        }else{
            const sameKey=bucket.find(val=>val[0]===key);
            if(sameKey){
                sameKey[1]=value;
            }else{
                bucket.push([key,value]);
            }
        }
    }
    get(key){
        let index=this.hash(key);
        const bucket=this.table[index];
        if(bucket){
            const sameKey=bucket.find(val=>val[0]===key);
            if(sameKey){
                return sameKey[1];
            }
        }
        return undefined;
    }
    delete(key){
        let index=this.hash(key);
        const bucket=this.table[index];
        if(bucket){
            const sameKey=bucket.find(val=>val[0]===key);
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1);
            }
        }
        
    }
    display(){
        for(let y of this.table){
           if(y){
             if(y.length>1){
                for(let x of y){
                    console.log(x);
                }
             }else{
                console.log(y);
             }
           }
        }
    }

}

const ht=new hashTable(20);
ht.put("name","saad");
ht.put("place","tvm");
ht.put("1","supra");
ht.put("2","brain dead");
ht.put("saad","ds");
ht.put("3","aju");
ht.display();
