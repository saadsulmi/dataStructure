const array=[2,5,3,9,5,3];
let rightSum=0;
let leftSum=0;
let min = +Infinity;
let minIndex;

for(let i=0;i<array.length;i++){
    rightSum=rightSum+array[i];
}

for(let i=0;i<array.length;i++){
    let leftNum=1+i;
    let rightNum=array.length-leftNum;
    leftSum=leftSum+array[i];
    rightSum=rightSum-array[i];
    let leftAvg=Math.floor(leftSum/leftNum);
    let rightAvg=Math.floor(rightSum/rightNum);
    let difference=Math.abs(leftAvg-rightAvg);
    if(min>difference){
        min=difference;
        minIndex=i;
    }
}

console.log("index with min avg : "+minIndex);