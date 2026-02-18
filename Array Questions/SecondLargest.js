arr = [12, 35, 1, 10, 34, 1]

const secondLargest = (arr) => {
    let n = arr.length;

    arr.sort((a, b) => b - a); // Sort the array in descending order

    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[0]) { // Check for the first element that is smaller than the largest
            return arr[i]; // Return the second largest element
        }   
    }
    return null; // Return null if there is no second largest element (e.g., all elements are the same)
}

console.log(secondLargest(arr)); // Output: 34

// Explanation: The function first sorts the array in descending order, so the largest element is at index 0.
// It then iterates through the sorted array starting from index 1 to find the first element that is smaller than the largest element.
// This element is the second largest. If all elements are the same, it returns null.