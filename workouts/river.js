class riverGraph{
    

    riverSizeFinder(matrix){
        let visited=[];
        let sizes=[];
        for(let i=0;i<matrix.length;i++){
            visited[i]=[];
            for(let j=0;j<matrix[0].length;j++){
                 visited[i][j]=false;
            }
        }
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[0].length;j++){
                if(visited[i][j]){
                    continue;
                }else{
                    this.flowThroughRiver(matrix,visited,i,j,sizes)
                }
                
            }
        }
        return sizes;
    }
    flowThroughRiver(matrix,visited,i,j,sizes){
        let nodeToExplore=[];
        let riverSize=0;
        nodeToExplore.push([i,j]);
        while(nodeToExplore.length!=0){
            let current=nodeToExplore.pop();
            i=current[0];
            j=current[1];
            if(visited[i][j]){
                continue;
            }
            visited[i][j]=true;
            if(matrix[i][j]===0){
                continue;
            }
            riverSize++;
            let adjacentNodes=this.getAdjacentNodes(matrix,visited,i,j);
            nodeToExplore.push(...adjacentNodes);
            
        }
        sizes.push(riverSize);
        
        
    }

    getAdjacentNodes(matrix,visited,i,j){
        let adjacentNodes=[];
        if(i>0&&!visited[i-1][j]){
            adjacentNodes.push([i-1,j]);
        }
        if(i<matrix.length-1&&!visited[i+1][j]){
            adjacentNodes.push([i+1,j])
        }
        if(j>0&&!visited[i][j-1]){
            adjacentNodes.push([i,j-1]);
        }
        if(j<matrix[0].length-1&&!visited[i][j+1]){
            adjacentNodes.push([i,j+1])
        }
        return adjacentNodes;
    }
}

let matrix=[[1,0,0,1,1],[0,1,0,0,1],[1,0,0,1,1],[1,1,1,1,0]];
const river=new riverGraph();
console.log(river.riverSizeFinder(matrix));