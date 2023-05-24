class minHeap{
    
    constructor(){
        this.heap=new Array();
    }
    
    minHeapBuilder(array){
        if(array===undefined){
            return;
        }
        this.heap=array;
        for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
            console.log(i);
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx){
        let parentIdx=currentIdx;
        let endIdx=this.heap.length-1
        let leftIdx=this.leftChild(parentIdx);
        while(leftIdx<=endIdx){
            let rightIdx=this.rightChild(parentIdx);
            let childToSwapIdx;
            if(rightIdx<=endIdx&&this.heap[rightIdx]<this.heap[leftIdx]){
                childToSwapIdx=rightIdx;
            }else{
                childToSwapIdx=leftIdx;
            }
            if(this.heap[childToSwapIdx]<this.heap[parentIdx]){
                this.swap(childToSwapIdx,parentIdx);
                parentIdx=childToSwapIdx;
                leftIdx=this.leftChild(parentIdx);
            }else{
                return;
            }
        }
    }
    shiftUp(currentIdx){
        let parentIdx=this.parent(currentIdx);
        while(currentIdx>0&&this.heap[parentIdx]>this.heap[currentIdx]){
                this.swap(parentIdx,currentIdx);
                currentIdx=parentIdx;
                parentIdx=this.parent(currentIdx);
        }

    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1);
    }

    remove(){
        this.swap(0,array.length-1);
        this.heap.pop();
        this.shiftDown(0);
    }


    sort(){
        let array=[];
        while(this.heap.length===0){
            array=push(this.heap[0]);
            this.remove();
        }
        return array;
    }





    peek(){
        return this.heap[0];
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
    display(){
        console.log(this.heap)
    }

}

const array=[30,40,50,60,10,20,70]
const mh=new minHeap();
mh.minHeapBuilder(array);
mh.insert(35);
mh.insert(90);
mh.insert(38);
mh.remove();
mh.display();