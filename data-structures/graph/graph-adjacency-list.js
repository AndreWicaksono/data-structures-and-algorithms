class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);

      return true;
    }

    return false;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (linkedVertex) => linkedVertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (linkedVertex) => linkedVertex !== vertex1
      );

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      const linkedVertex = this.adjacencyList[vertex].pop();

      this.removeEdge(vertex, linkedVertex);
    }

    delete this.adjacencyList[vertex];

    return this;
  }
}

/***  Usage example: ***/
// const myGraph = new Graph();

// myGraph.addVertex("A");
// myGraph.addVertex("B");
// myGraph.addVertex("C");
// myGraph.addVertex("D");

// myGraph.addEdge("A", "B");
// myGraph.addEdge("A", "C");
// myGraph.addEdge("A", "D");
// myGraph.addEdge("B", "D");
// myGraph.addEdge("C", "D");

// console.log(myGraph);

// console.log(myGraph.removeVertex("D"));
