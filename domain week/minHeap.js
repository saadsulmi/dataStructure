class minHeap{
    constructor(){
        this.heap=new Array()
    }

    heapBuilder(array){
        this.heap=array;
        let lastIdx=this.heap.length-1;
        let n=this.parent(lastIdx);
        for(let i=n;i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(i){
        let parentIdx=i
        let endIdx=this.heap.length
        let leftIdx=this.leftChild(parentIdx)
        while(leftIdx<endIdx){
            let rightIdx=this.rightChild(parentIdx);
            let swapIdx
            if(rightIdx<endIdx&&this.heap[leftIdx]>this.heap[rightIdx]){
                swapIdx=rightIdx
            }else{
                swapIdx=leftIdx
            }
            if(this.heap[swapIdx]<this.heap[parentIdx]){
                this.swap(swapIdx,parentIdx);
                parentIdx=swapIdx
                leftIdx=this.leftChild(parentIdx)
            }else{
                return
            }
        }
    }

    peek(){
        console.log(this.heap[0]);
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return (2*i+1)
    }
    rightChild(i){
        return (2*i+2)
    }
    swap(i,j){
        let temp=this.heap[i];
        this.heap[i]=this.heap[j]
        this.heap[j]=temp
    }

    display(){
        console.log(this.heap);
    }
}

let array=[9,4,3,5,6,7,2];

const mh=new minHeap();
mh.heapBuilder(array);
mh.display()
mh.peek()