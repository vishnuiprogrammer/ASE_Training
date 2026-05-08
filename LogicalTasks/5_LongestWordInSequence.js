const sentence = "JavaScript is powerful for backend and frontend development";
const sentences = sentence.split(" ");  // convert the sentence into the array of words by separator.


/* Use reduce method to find longest word in sentence compare 
the words in sentence with each other then returned the Longest word. */
function findLongestWordInSequence() {
    let result = sentences.reduce((longestWord, value) => {
        return longestWord.length >= value.length ? longestWord : value;
    });
}
findLongestWordInSequence()
console.log(result);


