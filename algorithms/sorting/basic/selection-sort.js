const selectionSort = (inputArray = []) => {
  if (inputArray.length === 0) return [];
  if (inputArray.length === 1) return inputArray;

  let currentMinimumIndex = null;
  let currentMinimumValue = null;

  for (
    let indexStartOfIteration = 0;
    indexStartOfIteration < inputArray.length - 1;
    indexStartOfIteration++
  ) {
    currentMinimumIndex = indexStartOfIteration;
    currentMinimumValue = inputArray[currentMinimumIndex];

    for (
      let indexCurrent = indexStartOfIteration + 1;
      indexCurrent < inputArray.length;
      indexCurrent++
    ) {
      const currentValue = inputArray[indexCurrent];

      if (currentValue < inputArray[currentMinimumIndex]) {
        currentMinimumIndex = indexCurrent;
        currentMinimumValue = inputArray[currentMinimumIndex];
      }
    }

    if (currentMinimumIndex !== indexStartOfIteration) {
      const valueStartOfIteration = inputArray[indexStartOfIteration];

      inputArray[indexStartOfIteration] = currentMinimumValue;
      inputArray[currentMinimumIndex] = valueStartOfIteration;
    }
  }

  return inputArray;
};

/***  Usage example: ***/
// const arrNumber = [4, 2, 6, 5, 1, 3];

// selectionSort(arrNumber);

// console.log(arrNumber);
