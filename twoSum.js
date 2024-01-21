// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]


let questionArray = [3,3]
let questionTarget = 6
const twoSum = (array, target) => {
    let firstNumber
    let secondNumber
    let firstIndex
    let secondIndex
    let answerArray = []

    for (let i = 0; i < array.length; i++) {
    
        for (let j = array.length - 1; j > i; j--) {

            if (array[i] + array[j] === target) {
                firstIndex = i;
                secondIndex = j;
                answerArray.push(i)
                answerArray.push(j)
                console.log(`firstIndex: ${firstIndex} secondIndex: ${secondIndex} .... array[${firstIndex}] + array[${secondIndex}] = ${target}`);
            }
        }

    }
    console.log(`First Index is: ${firstIndex} and second Index is: ${secondIndex}`);
    console.log(`array[${firstIndex}] + array[${secondIndex}] = ${array[firstIndex]} + ${array[secondIndex]} = ${target} `);
    return answerArray

}


console.log(twoSum(questionArray, questionTarget));
