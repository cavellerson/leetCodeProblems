// Given an integer x, return true if x is a palindrome, and false otherwise.
//
//
//
// Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


const checkPalindrome = (number) => {
    let numberArray = String(number).split('')
    let reversedArray = []
    let counter = 0;
    let isPalindrome;
    let arrayLength= numberArray.length

    for (let i = numberArray.length - 1; i >= 0; i--) {
        reversedArray.push(numberArray[i])
    }


    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === reversedArray[i]) {
            counter++
        }
    }

    if (counter === numberArray.length) {
        isPalindrome = true;

    } else {
        isPalindrome = false;
    }

    if (number < 0 || isPalindrome === false) {
        return false
    } else if (isPalindrome) {
        return true
    }

}

console.log(checkPalindrome(123454321)
);
