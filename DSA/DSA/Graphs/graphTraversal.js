class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  //   A
  //  / \
  // B   C
  // |   |
  // D---E
  //  \ /
  //   F
  DFS() {
    const visitedNodes = {};
    const result = [];
    const helper = (vertex) => {
      visitedNodes[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        const crrVertex = this.adjacencyList[vertex][i];
        if (!visitedNodes[crrVertex]) {
          helper(crrVertex);
        }
      }
    };
    helper("A");
    console.log(result);
    return result;
  }
  //   A
  //  / \
  // B   C
  // |   |
  // D---E
  //  \ /
  //   F
  BFS() {
    //Not working
    const visitedNodes = {};
    const result = [];
    const queue = ["A"];
    visitedNodes["A"] = true;
    let firstVertex;

    while (queue.length) {
      firstVertex = queue.shift();
      result.push(firstVertex);

      for (let i = 0; i < this.adjacencyList[firstVertex].length; i++) {
        const crrVertex = this.adjacencyList[firstVertex][i];
        if (!visitedNodes[crrVertex]) {
          visitedNodes[firstVertex] = true;
          queue.push(crrVertex);
        }
      }
    }
    console.log(result);
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(result);
    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("F", "E");
g.addEdge("C", "E");
//   A
//  / \
// B   C
// |   |
// D---E
//  \ /
//   F

// g.DFS();
g.BFS();
g.breadthFirst("A");
