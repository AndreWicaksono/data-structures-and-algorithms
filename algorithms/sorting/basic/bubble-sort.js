const bubbleSort = (inputArray = []) => {
  if (inputArray.length === 0) return [];
  if (inputArray.length === 1) return inputArray;

  for (
    let indexEndOfIteration = inputArray.length - 1;
    indexEndOfIteration > 0;
    indexEndOfIteration--
  ) {
    for (
      let indexCurrentIteration = 0;
      indexCurrentIteration < indexEndOfIteration;
      indexCurrentIteration++
    ) {
      const currentValue = inputArray[indexCurrentIteration];

      const nextIndex = indexCurrentIteration + 1;
      const nextValue = inputArray[indexCurrentIteration + 1];

      if (currentValue > nextValue) {
        inputArray[indexCurrentIteration] = inputArray[nextIndex];
        inputArray[nextIndex] = currentValue;
      }
    }
  }

  return inputArray;
};

/***  Usage example: ***/
// const arrNumber = [4, 2, 6, 5, 1, 3];

// bubbleSort(arrNumber);

// console.log(arrNumber);
