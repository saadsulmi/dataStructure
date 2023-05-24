const array = [9,12,1,22,4,5,79,23];

const bubbleSort=(array)=>{
    let limit=array.length-1
    for(let i=0;i<=limit;i++){
        for(let j=0;j<=limit-i;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            
        }console.log(array);
    }
    return array;
}

const insertionSort=(array)=>{
    let limit = array.length-1;
    for(let i=1;i<=limit;i++){
        let current=array[i];
        let j=i-1
        while(j>=0&&current<array[j]){
            array[j+1]=array[j];
            j--;
            
        }
        array[j+1]=current;
    }
    return array;
}

const selectionSort=(array)=>{
    let limit=array.length;
    for(let i=0;i<limit;i++){
        let sm=array[i];
        let ind=i
        for(let j=i+1;j<limit;j++){
            if(sm>array[j]){
              sm=array[j];
              ind=j
            }
        }
        let temp=array[ind];
        array[ind]=array[i];
        array[i]=temp;

    }
    return array;
}
console.log(selectionSort(array));
