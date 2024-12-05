function removeDuplicates(arr) {
    const uniqueArray = []; // Array to hold unique values

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false; // Flag to check if the current number is a duplicate

        // Check if the current number is already in the uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true; // Found a duplicate
                break; // No need to check further
            }
        }

        // If it's not a duplicate, add it to the uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray; // Return the array with unique values
}

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(numbers);
console.log(result); // Output: [1, 2, 3, 4, 5]