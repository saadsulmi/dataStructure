const binary=(array,target,start,end)=>{
    array.sort((a,b)=>a-b);

    let mid=Math.round((start+end)/2);
    while(start<=end){
        if(array[mid]===target){
            return 1;
        }
        if(array[mid]<target){
          return binary(array,target,mid+1,end);
        }else{
          return binary(array,target,start,mid-1);
        }
    }
    return 0;
}

console.log(binary([1,3,4,5,6,7],1,0,6));