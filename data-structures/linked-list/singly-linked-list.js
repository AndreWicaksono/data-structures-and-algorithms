class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  get(index) {
    if (typeof index !== "number" || index >= this.length || index < 0)
      return null;

    let result = this.head;

    for (let idx = 0; idx !== index; idx++) {
      result = result.next;
    }

    return result;
  }

  insert(index, value) {
    if (typeof index !== "number" || index < 0 || index > this.length)
      return false;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const pointerPreviousOfTargetIndex = this.get(index - 1);

    const newNode = new Node(value);

    newNode.next = pointerPreviousOfTargetIndex.next;
    pointerPreviousOfTargetIndex.next = newNode;

    this.length++;

    return true;
  }

  pop() {
    if (this.length === 0) return null;

    let newTailPointer = this.head;
    const deletedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      for (let idx = 0; idx !== this.length - 2; idx++) {
        newTailPointer = newTailPointer.next;
      }

      newTailPointer.next = null;
      this.tail = newTailPointer;
    }

    this.length--;

    return deletedNode;
  }

  print() {
    // This method made for debugging purposes

    const list = [];
    let currentObject = this.head;

    while (currentObject) {
      list.push(currentObject.value);
      currentObject = currentObject.next;
    }

    console.log(list);
  }

  push(value) {
    if (!value) return null;

    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.length;
  }

  remove(index) {
    if (typeof index !== "number" || index < 0 || index >= this.length)
      return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pointerPreviousTargetIndex = this.get(index - 1);
    const pointerDeletedNode = pointerPreviousTargetIndex.next;

    pointerPreviousTargetIndex.next = pointerDeletedNode.next;
    pointerDeletedNode.next = null;

    this.length--;

    return pointerDeletedNode;
  }

  reverse() {
    let pointerPrevious = null;
    let pointerCurrent = this.head;
    let pointerNext = null;

    this.head = this.tail;
    this.tail = pointerCurrent;

    for (let idx = 0; idx < this.length; idx++) {
      pointerNext = pointerCurrent.next;
      pointerCurrent.next = pointerPrevious;

      pointerPrevious = pointerCurrent;
      pointerCurrent = pointerNext;
    }

    return this;
  }

  reverseByCreatingNewLinkedList() {
    const newLinkedList = new LinkedList();
    const currentLength = this.length;

    newLinkedList.shift(); // Remove default value after initialized without value assignment

    let currentObjectIterate = null;

    for (let idx = 0; idx < currentLength; idx++) {
      currentObjectIterate = this.shift();

      newLinkedList.unshift(currentObjectIterate.value);
    }

    this.head = newLinkedList.head;
    this.tail = newLinkedList.tail;
    this.length = newLinkedList.length;

    return this;
  }

  set(index, value) {
    const result = this.get(index);

    if (!result) return false;

    result.value = value;

    return true;
  }

  shift() {
    if (this.length === 0) return null;

    const deletedNode = this.head;

    this.head = this.head.next;
    deletedNode.next = null;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;

    return deletedNode;
  }

  unshift(value) {
    if (!value) return null;

    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    if (this.length === 0) {
      this.tail = newNode;
    }

    this.length++;

    return this.length;
  }
}

/***  Usage example: ***/
// const myLinkedList = new LinkedList(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);
// myLinkedList.push(6);
// myLinkedList.push(7);
// myLinkedList.push(8);
// myLinkedList.push(17);
// myLinkedList.push(11);
// myLinkedList.push(1);
// myLinkedList.push("Tail");
// myLinkedList.pop()

// myLinkedList.remove(1);
// console.log(myLinkedList.remove(2));

// console.log(myLinkedList);
// myLinkedList.reverseByCreatingNewLinkedList();
// console.log("initial Data: ", myLinkedList);

// myLinkedList.reverse();
// console.log(myLinkedList);
// myLinkedList.print();
