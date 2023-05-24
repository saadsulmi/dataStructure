const array=[22,13,23,66,34,80,17];

const quickSort=(array)=>{
    if(array.length<=1){
        return array;
    }
    quickSortHelper(array,0,array.length-1);
    return array;
}

const quickSortHelper=(array,startIdx,endIdx)=>{
    if(startIdx>=endIdx){
        return;
    }
    let pivotIdx=startIdx;
    let leftIdx=startIdx+1;
    let rightIdx=endIdx;
    while(leftIdx<=rightIdx){
        if(array[leftIdx]>array[pivotIdx]&&array[rightIdx]<array[pivotIdx]){
            swap(array,leftIdx,rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if(array[leftIdx]<=array[pivotIdx]){
            leftIdx++;
        }
        if(array[rightIdx]>=array[pivotIdx]){
            rightIdx--;
        }
    }
    swap(array,rightIdx,pivotIdx);
    quickSortHelper(array,startIdx,rightIdx-1);
    quickSortHelper(array,rightIdx+1,endIdx);

}
const swap=(array,i,j)=>{
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}
quickSort(array);
console.log(array);