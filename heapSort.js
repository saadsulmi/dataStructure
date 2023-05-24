class heap{
    constructor(){
        this.heapArray=new Array();
    }

    heapBuilder(array){
        this.heapArray=array;
        let n=this.parent(array.length-1);
        for(let i=n;i>=0;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx){
        let parentIdx=currentIdx;
        let leftChildIdx=this.leftChild(parentIdx);
        let endIdx=this.heapArray.length-1;
        while(leftChildIdx<=endIdx){
            let rightChildIdx=this.rightChild(parentIdx);
            let swapIdx;
            if(rightChildIdx<=endIdx&&this.heapArray[rightChildIdx]<this.heapArray[leftChildIdx]){
                swapIdx=rightChildIdx;
            }else{
                swapIdx=leftChildIdx;
            }
            if(this.heapArray[swapIdx]<this.heapArray[parentIdx]){
                this.swap(swapIdx,parentIdx);
                parentIdx=swapIdx;
                leftChildIdx=this.leftChild(parentIdx);
            }else{
                return;
            }
        }

    }
    shiftDownSort(currentIdx,length){
        let parentIdx=currentIdx;
        let leftChildIdx=this.leftChild(parentIdx);
        let endIdx=length;
        while(leftChildIdx<=endIdx){
            let rightChildIdx=this.rightChild(parentIdx);
            let swapIdx;
            if(rightChildIdx<=endIdx&&this.heapArray[rightChildIdx]<this.heapArray[leftChildIdx]){
                swapIdx=rightChildIdx;
            }else{
                swapIdx=leftChildIdx;
            }
            if(this.heapArray[swapIdx]<this.heapArray[parentIdx]){
                this.swap(swapIdx,parentIdx);
                parentIdx=swapIdx;
                leftChildIdx=this.leftChild(parentIdx);
            }else{
                return;
            }
        }

    }
    heapSort(){
        let limit=this.heapArray.length-1;
        while(limit>0){
            this.swap(limit,0);
            this.shiftDownSort(0,--limit);
        }
    }
    swap(i,j){
        let temp=this.heapArray[i];
        this.heapArray[i]=this.heapArray[j];
        this.heapArray[j]=temp;
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return 2*i+1;
    }
    rightChild(i){
        return 2*i+2;
    }

}

array=[10,20,60,80,50,30];
const h=new heap();
h.heapBuilder(array);
h.heapSort();
console.log(h);