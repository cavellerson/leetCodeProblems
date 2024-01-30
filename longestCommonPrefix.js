// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

let string = ["flower","flow","flight"]
const longestCommonPrefix = (strs) => {
    let arrayLength = strs.length

    let wordLengths = []
    for (let word of string) {
        wordLengths.push(word.length)
    }
    let shortestWordLength = Math.min(...wordLengths)
    // console.log({shortestWordLength});
    // console.log({arrayLength});
    let stringObject = {}
    for (let i = 0; i < arrayLength; i++) {
        // stringObject.i = strs[i].split(' ')
        stringObject[`${i}`] = strs[`${i}`].split('')
        
    }
    console.log(stringObject);
}

longestCommonPrefix(string)
