let array=[2,8,1,19,6,7,4,9];

const bst=(array,target)=>{
    array.sort((a,b)=>a-b)
    return bstHelper(array,target,0,array.length-1)
}

const bstHelper=(array,target,start,end)=>{
    if(start>end){
        return false
    }
    let mid=Math.floor((start+end)/2)
    if(array[mid]===target){
        return true;
    }
    if(array[mid]>target){
        return bstHelper(array,target,start,mid-1)
    }
    if(array[mid]<target){
        return bstHelper(array,target,mid+1,end)
    }
}

console.log(bst(array,19));