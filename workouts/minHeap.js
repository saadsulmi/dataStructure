class minHeap{
    constructor(){
        this.heap=new Array();
    }

    heapBuilder(array){
        this.heap=array;
        let limit=this.parent(this.heap.length-1)
        for(let i=limit;i>=0;i--){
            this.shiftDown(i)
        }

    }
    shiftDown(currentIdx){
        let parentIdx=currentIdx;
        let leftIdx=this.leftChild(parentIdx);
        let endIdx=this.heap.length-1;
        while(leftIdx<=endIdx){
            let rightIdx=this.rightChild(parentIdx);
            let swapIdx;
            if(rightIdx<=endIdx&&this.heap[rightIdx]<this.heap[leftIdx]){
                swapIdx=rightIdx;
            }else{
                swapIdx=leftIdx;
            }
            if(this.heap[swapIdx]<this.heap[parentIdx]){
                this.swap(parentIdx,swapIdx);
                parentIdx=swapIdx;
                leftIdx=this.leftChild(parentIdx);
            }else{
                return;
            }
        }
    }
    insert(data){
        this.heap.push(data);
        this.shiftUp(this.heap.length-1);
    }

    shiftUp(currentIdx){
        let parentIdx=this.parent(currentIdx);
        while(currentIdx>0){
            if(this.heap[currentIdx]<this.heap[parentIdx]){
                this.swap(currentIdx,parentIdx);
                currentIdx=parentIdx;
                parentIdx=this.parent(currentIdx);
            }else{
                return;
            }
        }
    }

    remove(){
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.shiftDown(0);
    }
    peek(){
        console.log(this.heap[0]);
    }

    swap(i,j){
        let temp=this.heap[i];
        this.heap[i]=this.heap[j];
        this.heap[j]=temp;
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

const min=new minHeap();
let array=[45,34,63,25,12,65];
min.heapBuilder(array);
min.remove();
min.peek();
min.insert(10);
console.log(min);