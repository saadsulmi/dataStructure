const mergeSort=(array)=>{
    
    let limit=array.length;
    if(limit<=1){
        return array;
    }
    let mid=limit/2;
    let firstArray=array.slice(0,mid);
    let secondArray=array.slice(mid,limit);
    return mergeJoin(mergeSort(firstArray),mergeSort(secondArray));
}

const mergeJoin=(firstArray,secondArray)=>{
    const newArray=[];
    let i=0;
    let j=0;
    let k=0;

        while(i<firstArray.length && j<secondArray.length){
            if(firstArray[i]<secondArray[j]){
                newArray[k++]=firstArray[i++]
                }else{
                newArray[k++]=secondArray[j++]
            }
        }
        while(i<firstArray.length){
            newArray[k++]=firstArray[i++];
        }
        while(j<secondArray.length){
            newArray[k++]=secondArray[j++];
        }
    return newArray;
}
const array=[4,3,6,2,8,2,9,1];
console.log(mergeSort(array))