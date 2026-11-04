class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);

    this.top = newNode;
    this.length = 1;
  }

  pop() {
    if (this.length === 0) return null;

    const deletedValue = this.top.value;

    this.top = this.top.next;
    this.length--;

    return deletedValue;
  }

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
    this.length++;

    return this.length;
  }
}

/***  Usage example: ***/
// let myStack = new Stack(8);

// myStack.push(11);

// console.log(myStack);
