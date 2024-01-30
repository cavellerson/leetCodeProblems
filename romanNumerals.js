
let s = "MCMXCIV"
const convertRomanNumeral = (string) => {
    const romanNumeral = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }


    const numeralUnique = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    // converts string into an array
    let stringArray = string.split('')
    // creates another array to work with that is the same as stringArray
    let stringArrayToNumbers = [...stringArray]
    // console.log({stringArray});
    // console.log({stringArrayToNumbers});

    // loops through stringArray
    for (let index in stringArray) {
        // variable for putting every character into a string pair and to check if it's in numeralUnique
        let stringPair;
        // nextIndex
        let nextIndex = Number(index) + 1;
        // checks if next index exists to see if we can still stringPair
        if (nextIndex) {
            //sets the stringPair to the current index character concat with next index character
            stringPair = stringArray[index]+stringArray[nextIndex]
            // console.log({stringPair});

            // if the stringPair comes back as a number then replace that same index of stringArrayToNumbers to the value and then 0 for the nextIndex
            if (numeralUnique[`${stringPair}`]) {
                stringArrayToNumbers[index] = numeralUnique[`${stringPair}`]
                stringArrayToNumbers[nextIndex] = 0
                // console.log({stringArrayToNumbers});
            }

        }

    }
    // loops through stringArrayToNumbers array and now changes any none stringPairs characters ot their numerical value
    for (let j in stringArrayToNumbers) {
        if (romanNumeral[`${stringArrayToNumbers[`${j}`]}`]) {
            stringArrayToNumbers[j] = romanNumeral[`${stringArrayToNumbers[`${j}`]}`]
        }
    }

    // sets romanNumeral to 0 and to loop through each array value and adds it up
    let romanNumeralNum = 0;
    for (let number of stringArrayToNumbers) {
        romanNumeralNum += number;
    }
    return romanNumeralNum
}


console.log(convertRomanNumeral(s));
