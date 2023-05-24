const binarySearch=(array,targ)=>{
    array.sort((a,b)=>a-b);
    
    return binaryhelper(array,targ,0,array.length-1);
}

const binaryhelper=(array,target,start,end)=>{
    if(start>end){
        return false;
    }
    let mid=Math.floor((start+end)/2);
    console.log(mid);
    if(target===array[mid]) return true;

    if(array[mid]>target){
        return binaryhelper(array,target,start,mid-1);
    }else{
        return binaryhelper(array,target,mid+1,end);
    }
}

const array=[1,9,2,6,8,4,3];
console.log(binarySearch(array,10));