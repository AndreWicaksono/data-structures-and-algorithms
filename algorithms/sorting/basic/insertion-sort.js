const insertionSort = (inputArray) => {
  if (inputArray.length === 0) return [];
  if (inputArray.length === 1) return inputArray;

  let currentValue = null;
  let indexPrevious = null;
  let previousValue = null;

  for (let indexCurrent = 1; indexCurrent < inputArray.length; indexCurrent++) {
    currentValue = inputArray[indexCurrent];

    for (
      indexPrevious = indexCurrent - 1;
      inputArray[indexPrevious] > currentValue && indexPrevious > -1;
      indexPrevious--
    ) {
      previousValue = inputArray[indexPrevious];

      inputArray[indexPrevious + 1] = previousValue;
    }

    inputArray[indexPrevious + 1] = currentValue;
  }

  return inputArray;
};

/***  Usage example: ***/
// const arrNumber = [4, 2, 6, 5, 1, 3];

// insertionSort(arrNumber);

// console.log(arrNumber);
