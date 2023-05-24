const bubbleSort=(array)=>{
    const limit=array.length;
    for(let i=1 ; i<limit ; i++){
        let current=array[i];
        let j=i-1;
        while(j>=0&&current<array[j]){
            array[i]=array[j];
            j--
        }
        array[j+1]=current;
    }
    return array;
}
const array=[2,44,13,54,23];
console.log(bubbleSort(array));