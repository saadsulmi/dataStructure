// my array;
const array=[9,8,1,7,3,5,2,14,5];

// swap function;
const swap=(array,i,j)=>{
        let temp=array[i];
        array[i]=array[j];
        array[j]=temp;
}


// bubble sort;

const bubbleSort=(array)=>{
    let limit = array.length;
    for(let i=0;i<limit;i++){
        let j=0;
        while(j<limit-i-1){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
            j++
        }
    }
    return array;
}

//  insertion Sort;

const insertionSort=(array)=>{
    let limit=array.length;
    for(let i=1;i<limit;i++){
        let current=array[i];
        let j=i-1;
        while(j>=0&&array[j]>current){
            array[j+1]=array[j];
            j-- 
        }
       array[j+1]=current;
    }
    return array;
}


//  selection sort;

const selectionSort=(array)=>{
    let limit = array.length;
    for(let i=0;i<limit;i++){
        let sm=array[i];
        let index=i;
        for(let j=i+1;j<limit;j++){
            if(array[j]<sm){
                 sm=array[j];
                 index=j;
            }
        }
        swap(array,i,index);
    }
    return array;
}

// quick sort;

const quickSort=(array)=>{
    let limit=array.length;
    if(limit<=1){
        return array;
    }
    return quickSortHelper(array,0,limit-1);
}

const quickSortHelper=(array,startIdx,endIdx)=>{
    if(startIdx>=endIdx){
        return array;
    }
    let pivot=array[startIdx];
    
    let leftIdx=startIdx+1;
    let rightIdx=endIdx;
        while(leftIdx<=rightIdx){
            if(array[leftIdx]>pivot && array[rightIdx]<pivot){
                swap(array,leftIdx,rightIdx);
                rightIdx--;
                leftIdx++;
            }
            if(array[rightIdx]>=pivot){
                rightIdx--;
            }
            if(array[leftIdx]<=pivot){
                leftIdx++;
            }
        }
        swap(array,startIdx,rightIdx);
        quickSortHelper(array,startIdx,rightIdx-1);
        quickSortHelper(array,rightIdx+1,endIdx);
        return array;
}

// merge sort;

const mergeSort=(array)=>{
    if(array.length<=1){
        return array;
    }
     let limit = array.length;
     let mid=limit/2;
     let firstHalf=array.slice(0,mid);
     let secondHalf=array.slice(mid,limit);
     return mergeJoin( mergeSort(firstHalf),mergeSort(secondHalf));
}

const mergeJoin=(firstHalf,secondHalf)=>{
    const newArray=new Array(firstHalf.length+secondHalf.length);
    let i=0;
    let j=0;
    let k=0;
    while(i<firstHalf.length&&j<secondHalf.length){
        if(firstHalf[i]<secondHalf[j]){
            newArray[k++]=firstHalf[i++];
        }else{
            newArray[k++]=secondHalf[j++];
        }
    }
    while(i<firstHalf.length){
        newArray[k++]=firstHalf[i++];
    }
    while(j<secondHalf.length){
        newArray[k++]=secondHalf[j++];
    }
    return newArray;
}

console.log(mergeSort(array));