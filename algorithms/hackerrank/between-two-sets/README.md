<div align="center">

# 🧮 Between Two Sets
### *A HackerRank Algorithm Challenge & Mathematical Deep Dive*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HackerRank](https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white)](https://www.hackerrank.com/)

*"Sometimes, building the wrong tool teaches you more than using the right one."*

</div>

---

## 📖 Table of Contents
1. [The Problem Statement](#-the-problem-statement)
2. [The "Aha!" Moments (My Learning Journey)](#-the-aha-moments-my-learning-journey)
3. [The Over-Engineering Detour (The LCM Journey)](#-the-over-engineering-detour-the-lcm-journey)
4. [The Solutions](#-the-solutions)
5. [Repository Structure](#-repository-structure)

---

## 📝 The Problem Statement

You are given two arrays of integers, `a` and `b`. You need to determine all integers that satisfy the following two conditions:
1. The elements of the first array (`a`) are all **factors** of the integer being considered.
2. The integer being considered is a **factor** of all elements of the second array (`b`).

*(These are the numbers that exist "between" the two sets).*

**Example:**
* `a = [2, 6]`
* `b = [24, 36]`
* **Output:** `2` (The valid numbers are **6** and **12**)

---

## 💡 The "Aha!" Moments (My Learning Journey)

This challenge wasn't just about writing code; it was a journey of unlearning misconceptions and revisiting pure mathematics. Here is the chronological timeline of my thought process.

### ❌ Misconception 1: "Why isn't 2 an answer?"
**My first thought:** 2 is in array `a`, and 2 divides perfectly into 24 and 36. So why isn't 2 included?

**The "Aha!" moment:** I realized the problem mixes up "factors" and "multiples". 
* Condition 1 means the answer must be a **multiple** of every number in `a`. Since `a` contains 6, the answer must be \(\ge 6\). Therefore, 2 is disqualified because it's not a multiple of 6.

### ❌ Misconception 2: "Can I just start at the largest number in `a`?"
**My first thought:** If `a = [2, 6]`, the largest number is 6. Maybe I can just start my loop at 6 and step by 6?

**The "Aha!" moment:** This works for `[2, 6]` by coincidence, but fails for arrays like `[4, 6]`. If you start at 6, you miss the fact that 12 is the true LCM. You cannot rely on the maximum element; you need the **Least Common Multiple**.

### ❌ Misconception 3: "Is the LCM just the product of all array elements?"
**My first thought:** To find the common multiple, I just multiply all elements together. `a = [2, 6, 7]` -> `2 * 6 * 7 = 84`.

**The "Aha!" moment:** 84 is *a* common multiple, but it's not the *Least* Common Multiple (LCM). Because 6 already contains 2, multiplying by 2 again "double-counts" it. The true LCM of `[2, 6, 7]` is **42**. 
> *Lesson learned:* You cannot simply multiply elements. You must use Prime Factorization to find the true LCM without duplicating factors.

### 🚀 The Early Exit Realization
While thinking about loops, I realized that when checking if a number is divisible by all elements in `b`, I don't need to check the whole array if the first check fails. Using a `break` statement (Early Exit/Short-Circuiting) is crucial for HackerRank time limits.

---

## 🛠️ The Over-Engineering Detour (The LCM Journey)

In the beginning, I thought I **must** calculate the actual LCM using the pure mathematical formula. So, I decided to build a full `getLCM()` function from scratch using Prime Factorization (Factor Trees).

* **Where it lives:** `algorithms/math/least-common-multiple/solution.ts`

### Why I used a Two-Pass Approach
I deliberately chose to write `getLCM` using a two-pass approach (factorize everything first, then find the highest powers) because it strictly follows pure mathematics:

> "The reason I'm using a two-pass approach is because I followed the process of how the LCM is calculated using pure mathematics (factor tree).
> 
> I think the factor tree should be fully expanded down to the roots to ensure no numbers are left out. Then, after that, take the number with the highest exponent. And I believe that, mathematically speaking, these are indeed two distinct steps (you can’t just 'sneak in' and take the number during the factorization loop for the sake of algorithmic efficiency).
> 
> Because there’s a possibility that some numbers might be left out due to the factor tree not being fully expanded down to the roots. And indeed, if we solve math problems involving the LCM using the factor tree approach, there are actually two distinct steps involved: factoring prime numbers using the factor tree, and then selecting the number with the highest exponent. So basically, I’m following the pure mathematical formula."

### The Realization
Until I finished `getLCM` and looked back at the HackerRank problem, I realized that the "Between Two Sets" challenge only expects the `getTotalX` function. 

**The HackerRank problem does not actually require this over-engineered mathematical solution.** It is entirely sufficient to use the optimized `getTotalX` solution I had already solved. However, building `getLCM` was an invaluable exercise that solidified my understanding of prime factorization and separation of concerns.

---

## 💻 The Solutions

### 1. The HackerRank Solution (`getTotalX`)
Instead of calculating the exact LCM, my `getTotalX` approach uses a clever optimization: 
1. Start at the `max` value of `a` (since the answer must be a multiple of the largest element).
2. Step by that `max` value up to the `min` value of `b`.
3. Use a `Set` to filter out numbers that fail Condition 1, and then filter again for Condition 2.

```typescript
// algorithms/hackerrank/between-two-sets/solution.ts

function getTotalX(a: number[], b: number[]): number {
    if (a.length === 0 || b.length === 0) return 0;

    const maxValueOnA: number = Math.max(...a);
    const minValueOnB: number = Math.min(...b);

    const resultCommonMultipliesOfA: Set<number> = new Set();

    // Find multiples starting from max value of 'a' up to min value of 'b'
    for (let i = maxValueOnA; i <= minValueOnB; i += maxValueOnA) {
        resultCommonMultipliesOfA.add(i);
    }

    // Condition 1: Filter so only numbers that are common multiples of every number in 'a' remain
    a.forEach(value => {
        resultCommonMultipliesOfA.forEach(currentValueInResult => {
            if (currentValueInResult % value !== 0) {
                resultCommonMultipliesOfA.delete(currentValueInResult);
            }
        });
    });

    // Condition 2: Filter so only numbers divisible by all numbers in 'b' remain
    b.forEach(value => {
        resultCommonMultipliesOfA.forEach(currentValueInResult => {
            if (value % currentValueInResult !== 0) {
                resultCommonMultipliesOfA.delete(currentValueInResult);
            }
        });
    });

    return resultCommonMultipliesOfA.size;
}
```

### 2. The Mathematical Detour (`getLCM`)
This is the full Prime Factorization implementation built as a personal challenge. It uses the two-pass approach discussed above.

```typescript
// algorithms/math/least-common-multiple/solution.ts

function getLCM(input: number[]): number {
    const resultPrimeFactorization: Map<number, number>[] = [];
    const mappedForLCMCalculation: Map<number, number> = new Map();

    // Pass 1: Factorize every number into local maps
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
                mappedPrimeFactorization.set(currentPrime, 1);
            } else {
                const power: number = mappedPrimeFactorization.get(currentPrime) as number;
                mappedPrimeFactorization.set(currentPrime, power + 1);
            }

            currentResult = currentResult / currentPrime;
        }
        resultPrimeFactorization.push(mappedPrimeFactorization);
    });

    // Pass 2: Extract the highest power for each prime
    resultPrimeFactorization.forEach((_, idx) => {
        for (const [key, value] of resultPrimeFactorization[idx].entries()) {
            if (mappedForLCMCalculation.has(key)) {
                const currentPower: number = mappedForLCMCalculation.get(key)!;
                if (currentPower < value) {
                    mappedForLCMCalculation.set(key, value);
                }
            } else {
                mappedForLCMCalculation.set(key, value);
            }
        }
    });

    // Pass 3: Multiply the highest powers together
    let lcmResult: number = 1;
    mappedForLCMCalculation.forEach((value, key) => {
        lcmResult *= Math.pow(key, value);
    });

    return lcmResult;
}
```

---

## 👨‍💻 About the Author

**Andre Wicaksono** — _Software Engineer_

<div align="left">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/andrewicaksono)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndreWicaksono)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andrewicaksana@gmail.com)

</div>