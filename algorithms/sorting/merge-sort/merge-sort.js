const merge = (array1 = [], array2 = []) => {
  const result = [];

  if (!array1.length && !array2.length) return result;

  let indexFirstArray = 0;
  let indexSecondArray = 0;

  while (indexFirstArray < array1.length && indexSecondArray < array2.length) {
    if (array1[indexFirstArray] < array2[indexSecondArray]) {
      result.push(array1[indexFirstArray]);
      indexFirstArray++;
    } else {
      result.push(array2[indexSecondArray]);
      indexSecondArray++;
    }
  }

  while (indexFirstArray < array1.length) {
    result.push(array1[indexFirstArray]);
    indexFirstArray++;
  }

  while (indexSecondArray < array2.length) {
    result.push(array2[indexSecondArray]);
    indexSecondArray++;
  }

  return result;
};

const mergeSort = (inputArray = []) => {
  if (inputArray.length === 1) return inputArray;

  const indexMiddle = Math.floor(inputArray.length / 2);

  let left = inputArray.slice(0, indexMiddle);
  let right = inputArray.slice(indexMiddle);

  return merge(mergeSort(left), mergeSort(right));
};

/***  Usage example: ***/
// const unsortedArray = [2, 1, 4, 3, 8, 6, 5, 7];

// console.log(mergeSort(unsortedArray));



/**
const unsortedArray = [2, 1, 4, 3, 8, 6, 5, 7];


1.
  - inputArray -> [2, 1, 4, 3, 8, 6, 5, 7]
  - arrayLeft -> [2, 1, 4, 3] | arrayRight -> [8, 6, 5, 7]

  - return merge(mergeSort(arrayLeft), mergeSort(arrayRight)); will run mergeSort(arrayLeft) first -> mergeSort([2, 1, 4, 3])
  
2. mergeSort([2, 1, 4, 3]);
  - inputArray -> [2, 1, 4, 3]
  - arrayLeft -> [2, 1] | arrayRight -> [4, 3]

  - return merge(mergeSort(arrayLeft), mergeSort(arrayRight)); will run mergeSort(arrayLeft) first -> mergeSort([2, 1,])

3. mergeSort([2, 1]);
  - inputArray -> [2, 1]
  - arrayLeft -> [2] | arrayRight -> [1]

  - return merge(mergeSort(arrayLeft), mergeSort(arrayRight)); will run mergeSort(arrayLeft) first -> mergeSort([2])

4. mergeSort([2]);
  - inputArray -> [2]

  - if (inputArray.length === 1) will be true & mergeSort([2]) return inputArray -> [2]

5. Will run mergeSort(arrayRight) of step no. 3.
  - inputArray -> [1]

  - if (inputArray.length === 1) will be true & mergeSort([1]) return inputArray -> [1]

6. Will run merge([2], [1]) of step no. 3.
  - Result -> [1, 2]
  - return merge([2, 1] done = [1, 2], [4, 3] -> next step no. 7)

7. mergeSort([4, 3]);
  - inputArray -> [4, 3]
  - arrayLeft -> [4] | arrayRight -> [3]

  - return merge(mergeSort(arrayLeft), mergeSort(arrayRight)); will run mergeSort(arrayLeft) first -> mergeSort([4])

8. mergeSort([4]);
  - inputArray -> [4]

  - if (inputArray.length === 1) will be true & mergeSort([4]) return inputArray -> [4]

9. Will run mergeSort(arrayRight) of step no. 7.
  - inputArray -> [3]

  - if (inputArray.length === 1) will be true & mergeSort([3]) return inputArray -> [3]

10. Will run merge([4], [3]) of step no. 7.
  - Result -> [3, 4]
  - return merge([2, 1] done = [1, 2], [4, 3] done = [3, 4]) -> merge([1, 2], [3, 4])

11. Will run merge([1, 2], [3, 4]) of step no. 10
  - Return -> [1, 2, 3, 4]

12. Will run mergeSort(8, 6, 5, 7) and the process will be repeat like step from no. 2



**/
