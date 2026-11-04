function getTotalX(a: number[], b: number[]): number {
    if (a.length === 0 || b.length === 0) return 0

    const maxValueOnA: number = Math.max(...a);
    const minValueOnB: number = Math.min(...b);

    const resultCommonMultipliesOfA: Set<number> = new Set();

    // Find multiply first using in a range that start from maximum value available on `a` and ended at minimum value available on `b`.
    for (let i = maxValueOnA; i <= minValueOnB; i += maxValueOnA) {
        resultCommonMultipliesOfA.add(i)
    }

    // Filter the elements so that only the numbers that are common multiples of every number in `a` remain
    a.forEach(value => {
        resultCommonMultipliesOfA.forEach(currentValueInResult => {
            if (currentValueInResult % value !== 0) {
                resultCommonMultipliesOfA.delete(currentValueInResult)
            }
        })
    });

    // Filter the elements so that only those numbers that are divisible by all the numbers in `b` remain.
    b.forEach(value => {
        resultCommonMultipliesOfA.forEach(currentValueInResult => {
            if (value % currentValueInResult) {
                resultCommonMultipliesOfA.delete(currentValueInResult)
            }
        })
    });

    return resultCommonMultipliesOfA.size;
}

// console.log(getTotalX([2, 4], [16, 32, 96])); // PASSED
// console.log(getTotalX([2, 6], [24, 36])) // PASSED
// console.log(getTotalX([3, 4], [24, 48])) // PASSED