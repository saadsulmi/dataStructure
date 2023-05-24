
class riverGraph{
    checkRiverSize(matrix){
        let visited=[];
        for(let i=0;i<matrix.length;i++){
            visited[i]=[]
            for(let j=0;j<matrix[0].length;j++){
                visited[i][j]=false;
            }
        }
        let sizes=[];
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[0].length;j++){
                if(visited[i][j]){
                    continue;
                }else{
                    this.flowThroughRiver(i,j,matrix,visited,sizes);
                }
            }
        }
        return sizes;
    }

    flowThroughRiver(i,j,matrix,visited,sizes){
        let riverSize=0;
        let nodeToExplore=[];
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
            let nearestNode=this.getNearestNodes(i,j,matrix,visited);
            nodeToExplore.push(...nearestNode);
            
        }
        sizes.push(riverSize);
        
    }
    getNearestNodes(i,j,matrix,visited){
        let nearestNodes=[];
        if(i>0&&!visited[i-1][j]){
            nearestNodes.push([i-1,j]);
        }
        if(i<matrix.length-1&&!visited[i+1][j]){
            nearestNodes.push([i+1,j]);
        }
        if(j>0&&!visited[i][j-1]){
            nearestNodes.push([i,j-1]);
        }
        if(j<matrix[0].length-1&&!visited[i][j+1]){
            nearestNodes.push([i,j+1]);
        }
        return nearestNodes;
    }
}

let matrix = [[1,0,0,1,1],[0,1,1,1,0],[0,0,0,0,1],[1,0,0,0,1]];
const river = new riverGraph();
console.log(river.checkRiverSize(matrix));