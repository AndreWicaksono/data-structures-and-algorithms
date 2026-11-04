// Collision Handling Approach: Separate Chaining with arrays

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  get(key) {
    const index = this.hash(key);

    if (this.dataMap[index]) {
      for (
        let indexIteration = 0;
        indexIteration < this.dataMap[index].length;
        indexIteration++
      ) {
        const currentKey = this.dataMap[index][indexIteration][0];

        if (currentKey === key) return this.dataMap[index][indexIteration][1];
      }
    }

    return undefined;
  }

  keys() {
    const allKeys = [];

    for (let indexTable = 0; indexTable < this.dataMap.length; indexTable++) {
      if (this.dataMap[indexTable]) {
        for (
          let indexItemWithinAddress = 0;
          indexItemWithinAddress < this.dataMap[indexTable].length;
          indexItemWithinAddress++
        ) {
          allKeys.push(this.dataMap[indexTable][indexItemWithinAddress][0]);
        }
      }
    }

    return allKeys;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }
}

/***  Usage example: ***/
// const myHashTable = new HashTable();

// myHashTable.set("lumber", 2000);
// myHashTable.set("nails", 2000);
// myHashTable.set("lumber", 2000);

// console.log(myHashTable);
