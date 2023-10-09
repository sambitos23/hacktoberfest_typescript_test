//max elemnt in an array


function findMaxElement(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined; 
  }

  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

// Example 
const numbers = [3, 8, 1, 6, 2, 9, 4, 7];
const maxNumber = findMaxElement(numbers);
if (maxNumber !== undefined) {
  console.log(`The maximum element in the array is: ${maxNumber}`);
} else {
  console.log("The array is empty.");
}
