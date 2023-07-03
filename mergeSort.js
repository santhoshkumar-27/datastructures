function mergeSort(array) { // o(logn)
    if (array.length < 2) {
        return array;
    };

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex); // Divide and conquer
    return merge(mergeSort(leftArray), mergeSort(rightArray)); // o(n)
}
/**
 * @description It takes two arrays as a ordered array and compare and merged;
 * @param {[]} leftArray ordered array
 * @param {[]} rightArray ordered array
 * @returns result of two array merged of sorted array
 */
function merge(leftArray, rightArray) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    // any remaining item in the array of leftArray and rightArray will get pushed
    resultArray = resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
    return resultArray
}

// let arr = [12, 3 , 16, 5, 2, 9];
let arr = [12, 3 , 16, 5, 0];
console.log(mergeSort(arr))