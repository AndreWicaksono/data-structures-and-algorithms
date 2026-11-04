const swap = (arrayToSwap, firstIndex, secondIndex) => {
  let temp = arrayToSwap[firstIndex];

  arrayToSwap[firstIndex] = arrayToSwap[secondIndex];
  arrayToSwap[secondIndex] = temp;
};

const pivot = (
  inputArray = [],
  pivotIndex = 0,
  endIndex = inputArray.length - 1
) => {
  if (inputArray.length <= 1) return inputArray;

  let swapIndex = pivotIndex;

  for (
    let indexIteration = pivotIndex + 1;
    indexIteration <= endIndex;
    indexIteration++
  ) {
    if (inputArray[indexIteration] < inputArray[pivotIndex]) {
      swapIndex++;

      swap(inputArray, swapIndex, indexIteration);
    }
  }

  swap(inputArray, pivotIndex, swapIndex);

  return swapIndex;
};

const quickSort = (
  inputArray = [],
  left = 0,
  right = inputArray.length - 1
) => {
  if (left < right) {
    let pivotIndex = pivot(inputArray, left, right);

    quickSort(inputArray, left, pivotIndex - 1);
    quickSort(inputArray, pivotIndex + 1, right);
  }

  return inputArray;
};

/***  Usage example: ***/
// const unsortedArray = [4, 6, 1, 7, 3, 2, 5];
// const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 4]
// quickSort(unsortedArray);
// console.log(unsortedArray);
