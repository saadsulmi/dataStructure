class graph{
    constructor(){
        this.map=new Map();
    }

    addVertex(data){
        this.map.set(data,[]);
    }

    insert(vertex,edge,isBidirectional=true){
        if(!this.map.has(vertex)){
            this.addVertex(vertex);
        }
        if(!this.map.has(edge)){
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if(isBidirectional){
            this.map.get(edge).push(vertex);
        }
    }
    dfs(vertex){
        let visited=new Set();
        this.dfsHelper(visited,vertex);
        for(let x of this.map){
            if(visited.has(x[0])){
                continue;
            }else{
                this.dfsHelper(visited,x[0]);
            }
        }
    
    }
    dfsHelper(visited,vertex){
        let nodeToExplore=[];
        nodeToExplore.push(vertex);
        while(nodeToExplore.length!=0){
            let current=nodeToExplore.pop();
            if(visited.has(current)){
                continue;
            }
            visited.add(current);
            console.log(current);
            nodeToExplore.push(...this.map.get(current));
        }
    }

    shortestDistance(vertex,end){
        let nodeToExplore=[];
        nodeToExplore.push(vertex);
        let visited=new Set();
        let distance=new Map();
        distance.set(vertex,0);
        while(nodeToExplore.length!=0){
            let current=nodeToExplore.shift();
            if(visited.has(current)){
                continue;
            }
            visited.add(current);
            if(current===end){
                return distance.get(end);
            }
            for(let val of this.map.get(current)){
                if(!visited.has(val)){
                    distance.set(val,distance.get(current)+1);
                    nodeToExplore.push(val);
                }
            }
        }
        return Infinity;
    }

      bfs(vertex){

        let visited=new Set();
        let nodeToexplore=[];
        nodeToexplore.push(vertex);
           
         while(nodeToexplore.length!=0){ 
            let current=nodeToexplore.shift();
            if(visited.has(current)){
                continue
            }
            visited.add(current);
            console.log(current);
            nodeToexplore.push(...this.map.get(current));
         }
    }  
    removeVertex(vertex) {
        if (!this.map.has(vertex)) {
          console.log("Vertex not found.");
          return;
        }
        this.map.delete(vertex);
        for (let [key, value] of this.map) {
          let index = value.indexOf(vertex);
          if (index != -1) {
            value.splice(index, 1);
          }
        }
    }
    display(){
        for(let val of this.map){
            console.log(val[0]+" : "+val[1]);
        }
    }
}
const g=new graph();
g.insert(1,2);
g.insert(2,3);
g.insert(3,4);
g.insert(4,5);
g.insert(3,5);
g.insert(5,23);
g.insert(23,55);

console.log(g);
