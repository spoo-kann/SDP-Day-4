function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
    let longestWord = ''; // Variable to hold the longest word

    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Check if the current word is longer than the longestWord found so far
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update longestWord
        }
    }

    return longestWord; // Return the longest word
}

// Example usage
const sentence = "The quick brown fox jumped over the lazy dog";
const result = findLongestWord(sentence);
console.log(result); 