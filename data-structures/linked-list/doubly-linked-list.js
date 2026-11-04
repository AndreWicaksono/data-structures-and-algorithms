class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.length = 1;
    this.tail = newNode;
  }

  get(indexTarget) {
    if (
      typeof indexTarget !== "number" ||
      indexTarget < 0 ||
      indexTarget >= this.length
    )
      return null;

    if (indexTarget === 0) return this.head;
    if (indexTarget === this.length - 1) return this.tail;

    const indexMiddleOfLinkedList = (this.length / 2).toFixed() - 1;

    let pointerTarget =
      indexTarget <= indexMiddleOfLinkedList ? this.head : this.tail;

    if (pointerTarget === this.head) {
      for (
        let indexIteration = 0;
        indexIteration !== indexTarget;
        indexIteration++
      ) {
        pointerTarget = pointerTarget.next;
      }
    } else {
      for (
        let indexIteration = this.length - 1;
        indexIteration !== indexTarget;
        indexIteration--
      ) {
        pointerTarget = pointerTarget.prev;
      }
    }

    return pointerTarget;
  }

  insert(indexTarget, value) {
    if (
      typeof indexTarget !== "number" ||
      indexTarget < 0 ||
      indexTarget > this.length
    )
      return false;

    if (indexTarget === 0) return this.unshift(value);
    if (indexTarget === this.length) this.push(value);

    const newNode = new Node(value);

    const pointerTarget = this.get(indexTarget);

    newNode.prev = pointerTarget.prev;
    newNode.prev.next = newNode;
    newNode.next = pointerTarget;
    newNode.next.prev = newNode;

    this.length++;

    return true;
  }

  pop() {
    if (this.length === 0) return null;

    const newTail = this.tail.prev;
    const target = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
      target.prev = null;
    }

    this.length--;

    return target;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  remove(indexTarget) {
    if (
      typeof indexTarget !== "number" ||
      indexTarget < 0 ||
      indexTarget >= this.length
    )
      return null;

    if (indexTarget === 0) return this.shift();
    if (indexTarget === this.length - 1) return this.pop();

    const pointerDeletedNode = this.get(indexTarget);

    pointerDeletedNode.prev.next = pointerDeletedNode.next;
    pointerDeletedNode.next.prev = pointerDeletedNode.prev;
    pointerDeletedNode.next = null;
    pointerDeletedNode.prev = null;

    this.length--;

    return pointerDeletedNode;
  }

  set(index, value) {
    const pointerTarget = this.get(index);

    if (!pointerTarget) return false;

    pointerTarget.value = value;

    return true;
  }

  shift() {
    if (this.length === 0) return null;

    if (this.length === 1) return this.pop();

    const deletedNode = this.head;

    this.head = this.head.next;
    this.head.prev = null;
    deletedNode.next = null;

    this.length--;

    return deletedNode;
  }

  unshift(value) {
    if (this.length === 0) return this.push(value);

    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
}

/***  Usage example: ***/
// const myLinkedList = new DoublyLinkedList(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);

// myLinkedList.remove(3);
// myLinkedList.remove(3);
// console.log(myLinkedList);
