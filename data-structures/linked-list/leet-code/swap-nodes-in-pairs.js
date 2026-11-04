class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
    this.length++;
  }

  swapPairs() {
    if (this.length <= 1) return this;

    let pointerStart = this.head;
    let pointerEnd = this.head.next;

    let pointerPreviousBlock = null;
    let pointerNextBlock = this.head.next.next;

    this.head = this.head.next;

    for (let iteration = 1; iteration <= this.length / 2; iteration++) {
      pointerEnd.next = pointerStart;
      pointerEnd.prev = pointerPreviousBlock;
      pointerStart.prev = pointerEnd;

      pointerPreviousBlock = pointerStart;

      // Connecting previous block to next block. But first we need to check availability of next block. If next block is not available (null), that means our pointerStart at current iteration will be the last node.
      if (pointerNextBlock && pointerNextBlock.next) {
        pointerStart.next = pointerNextBlock.next;
      } else {
        pointerStart.next = pointerNextBlock;

        if (this.length % 2 !== 0) {
          // In odd case, pointerNextBlock.prev is not connected yet with previous block.
          pointerNextBlock.prev = pointerStart;
        }
      }

      pointerNextBlock =
        pointerNextBlock && pointerNextBlock.next
          ? pointerNextBlock.next.next
          : null;
      pointerEnd = pointerEnd && pointerEnd.next ? pointerEnd.next.next : null;
      pointerStart = pointerEnd ? pointerEnd.prev : null;
    }

    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original List 1:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log("\nList 1 after swapping pairs:");
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original List 1:
    1
    2
    3
    4
    5

    List 1 after swapping pairs:
    2
    1
    4
    3
    5

    Original List 2:
    1
    2
    3
    4
    5
    6

    List 2 after swapping pairs:
    2
    1
    4
    3
    6
    5
*/
