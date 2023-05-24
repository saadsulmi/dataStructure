class graph{
    constructor(){
        this.map=new Map()
    }
    addVertex(vertex){
        this.map.set(vertex,[]);
    }

    insert(vertex,edge,isBidirectional=true){
        if(!this.map.has(vertex)){
            this.addVertex(vertex);
        }
        this.map.get(vertex).push(edge);
        if(!this.map.has(edge)){
            this.addVertex(edge);
        }
        if(isBidirectional){
            this.map.get(edge).push(vertex);
        }
    }

    display(){
        for(let x of this.map){
            console.log(x);
        }
    }

    dfs(vertex){
        let visited=new Set();
        this.dfsHelper(vertex,visited)
        for(let val of this.map){
            if(!visited.has(val[0])){
                this.dfsHelper(val[0],visited);
            }
        }
    }
    dfsHelper(vertex,visited){
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
}

const g=new graph();
g.insert(6,4);
g.insert(5,4);
g.insert(4,9);
g.insert(9,3);
g.insert(3,7);
g.insert(3,11);
g.insert(3,22);
g.insert(5,8);
g.insert(15,28);
g.display()
// g.dfs(6);
g.bfs(6)