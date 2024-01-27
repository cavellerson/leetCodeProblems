let array1 = [1,2,4]
let array2 = [1,3,4]


const mergeTwoList = (list1, list2) => {
    let mergedArray = [...list1, ...list2]

    mergedArray.sort((a,b,) => {
        return a - b
    })
    let finalArray = [...mergedArray]
    return finalArray
}

console.log(mergeTwoList(array1, array2));
