arr = [1, 14, 2, 16, 10, 20]

const thirdLargest = (arr) => {
    let n = arr.length;

    arr.sort((a, b) => b - a); // Sort the array in descending order
    
    let count = 1; // Initialize count to track the number of unique elements found

    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[i - 1]) { // Check for the first element that is smaller than the previous one
            count++; // Increment count for each unique element found
            if (count === 3) { // If we have found the third largest element
                return arr[i]; // Return the third largest element
            }
        }
    }
    return null; // Return null if there are fewer than 3 unique elements
}

console.log(thirdLargest(arr)); // Output: 14

// Explanation: The function first sorts the array in descending order, so the largest element is at index 0.
// It then iterates through the sorted array starting from index 1 to find unique elements that are smaller than the previous one.
// The count variable keeps track of how many unique elements have been found. When count reaches 3, it returns the current element as the third largest.