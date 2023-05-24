class maxHeap{
    constructor(){
        this.heap=new Array();
    }

    buildHeap(array){
        this.heap=array;
        for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx){
        let parentIdx=currentIdx;
        let endIdx=this.heap.length-1;
        let leftChildIdx=this.leftChild(parentIdx);
        while(leftChildIdx<=endIdx){
            let rightChildIdx=this.rightChild(parentIdx);
            let childSwapIdx;
            if(rightChildIdx<=endIdx&&this.heap[rightChildIdx]>this.heap[leftChildIdx]){
                childSwapIdx=rightChildIdx;
            }else{
                childSwapIdx=leftChildIdx;
            }
            if(this.heap[childSwapIdx]>this.heap[parentIdx]){
                this.swap(childSwapIdx,parentIdx);
                parentIdx=childSwapIdx;
                leftChildIdx=this.leftChild(parentIdx);
            }else{
                return;
            }
        }
    }

    shiftUp(currentIdx){
        let parentIdx=this.parent(currentIdx);
        while (currentIdx>0&&this.heap[currentIdx]>this.heap[parentIdx]) {
            this.swap(currentIdx,parentIdx);
            currentIdx=parentIdx;
            parentIdx=this.parent(currentIdx);
        }
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1);
    }
    
    remove(){
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.shiftDown(0);
    }

    peek(){
        return this.heap[0];
    }
    display(){
        console.log(this.heap);
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
    swap(i,j){
        let temp=this.heap[i];
        this.heap[i]=this.heap[j];
        this.heap[j]=temp;
    }
}

const array=[10,30,90,20,80,40,60]
const max=new maxHeap();
max.buildHeap(array);
max.insert(100);
max.insert(85);
max.remove();
console.log(max.peek());
max.display();