const array=[3,30,34,5,9];
const newArray=[];

for(let i=0;i<array.length;i++){
    let temp=array[i];
    while(temp>9){
        temp=temp/10;
    }
    newArray.push(temp);
}

let limit=array.length;
for(let i=0;i<limit;i++){
    let j=0;
    while(j<limit-1-i){
        if(newArray[j]<newArray[j+1]){
            [newArray[j],newArray[j+1]]=[newArray[j+1],newArray[j]];
            [array[j],array[j+1]]=[array[j+1],array[j]];
        }
        j++
    }

}
let str="";
for(let i=0;i<array.length;i++){
    str=str+array[i];
}
console.log(str);