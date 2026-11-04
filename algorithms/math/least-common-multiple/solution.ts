function getLCM(input: number[]) {
    const resultPrimeFactorization: Map<number, number>[] = [];

    const mappedForLCMCalculation: Map<number, number> = new Map();

    input.forEach(item => {
        const mappedPrimeFactorization: Map<number, number> = new Map();

        let currentPrime = 2;
        let currentResult = item;

        while (currentPrime <= currentResult) {
            if (currentResult % currentPrime !== 0) {
                currentPrime++;
                continue;
            }

            if (!mappedPrimeFactorization.has(currentPrime)) {
                mappedPrimeFactorization.set(currentPrime, 1)
            } else {
                const power: number = mappedPrimeFactorization.get(currentPrime) as number;

                mappedPrimeFactorization.set(currentPrime, power + 1);
            }

            currentResult = currentResult / currentPrime;
        }

        resultPrimeFactorization.push(mappedPrimeFactorization);

    });

    // Removes duplicate by including only the highest power
    resultPrimeFactorization.forEach((_, idx) => {
        for (const [key, value] of resultPrimeFactorization[idx].entries()) {
            if (mappedForLCMCalculation.has(key)) {
                const currentPower: number = mappedForLCMCalculation.get(key)!;

                if (currentPower < value) {
                    // Set new power
                    mappedForLCMCalculation.set(key, value);
                }
            } else {
                mappedForLCMCalculation.set(key, value)
            }
        }
    })

    // Multiply stored of highest power
    let lcmResult: number = 1;

    mappedForLCMCalculation.forEach((value, key) => {
        if (!lcmResult) {
            lcmResult = Math.pow(key, value)
        } else {
            lcmResult *= Math.pow(key, value)
        }
    })

    return lcmResult;
}

// console.log(getLCM([2, 6]));