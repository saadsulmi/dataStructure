class RiverGraph {
    checkRiverSize(matrix) {
        let visited = [];
        for (var i = 0; i < matrix.length; i++) {
            visited[i] = [];
            for (var j = 0; j < matrix[1].length; j++) {
                visited[i][j] = false;
            }
        }
        let sizes = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (visited[i][j]) {
                    continue;
                } else {
                    this.traverseThroughRiver(i, j, matrix, visited, sizes);
                }
            }
        }
        return sizes;
    }
    traverseThroughRiver(i, j, matrix, visited, sizes) {
        let currentRiverSize = 0;
        let nodeToExplore = [];
        nodeToExplore.push([i, j]);
        while (nodeToExplore.length != 0) {
            let currentNode = nodeToExplore.pop();
            i = currentNode[0];
            j = currentNode[1];
            if (visited[i][j]) {
                continue;
            }
            visited[i][j] = true;
            if (matrix[i][j] == 0) {
                continue;
            }
            currentRiverSize++;
            let nearestNode = this.getAdjacentNode(i, j, matrix, visited);
            nodeToExplore.push(...nearestNode);
        }
        sizes.push(currentRiverSize);
    }
    getAdjacentNode(i, j, matrix, visited) {
        let nearest = [];
        if (i > 0 && !visited[i - 1][j]) {
            nearest.push([i-1, j]);
        }
        if (i < matrix.length - 1 && !visited[i + 1][j]) {
            nearest.push([i+1, j]);
        }
        if (j > 0 && !visited[i][j - 1]) {
            nearest.push([i, j-1]);
        }
        if (j < matrix[0].length - 1 && !visited[i][j + 1]){
            nearest.push([i, j+1]);
        }
        return nearest;
    }
}
let matrix = [[1,0,0,1,1],[0,1,0,0,1],[1,0,0,1,1],[1,1,1,1,0]];
const riverGraph = new RiverGraph();

console.log(riverGraph.checkRiverSize(matrix));
