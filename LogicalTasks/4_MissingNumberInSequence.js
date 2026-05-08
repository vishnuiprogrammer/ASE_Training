const numbers = [1, 2, 3, 4, 6, 7, 8];

let minValue = Infinity; 
let maxValue = -Infinity;
let sum = 0;
let total = 0;

function findMissingNumberInSequence() {
    // Find the minimum & maximum value from number sequence & also calculate the sum of given sequence.
    for (let i = 0; i < numbers.length; i++) {
        minValue = Math.min(minValue, numbers[i]);
        maxValue = Math.max(maxValue, numbers[i]);
        sum += numbers[i];
    }

    // Calculate the sum from minimum value till maximum value.
    for (let i = minValue; i <= maxValue; i++) {
        total += i;
    }

    // Found the missing number by subtracting total by actual sum.
    return (total - sum);
}

let missingNumber = findMissingNumberInSequence();
console.log(missingNumber);