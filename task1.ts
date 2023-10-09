// Find the smallest number in the array

function findMinElement(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined; // Array is empty
  }

  const minElement = Math.min(...arr);
  return minElement;
}

// Example usage:
const numbers = [3, 8, 1, 6, 2, 9, 4, 7];
const minNumber = findMinElement(numbers);

if (minNumber !== undefined) {
  console.log(`The smallest number in the array is: ${minNumber}`);
} else {
  console.log("The array is empty.");
}
