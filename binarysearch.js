const array = [];
let start = 0;
let target = 5;
let count = 0;

for (let i = 1; i < 1025; i++) {
    array.push(i)
}
let end = array.length - 1;


function binarySearch(array, start, end, target) {
    if (start > end) return 'Target not found';
    count++;
    let middleIndex = Math.floor((start + end) / 2);
    let middleValue = array[middleIndex];
    if (target === middleValue) return middleIndex;

    if (target > middleValue) return binarySearch(array, middleIndex + 1, end, target);
    else return binarySearch(array, start, middleIndex - 1, target);
}
let startTime = Date.now();
console.log(binarySearch(array, start, end, target), count);
let timeTaken = Date.now() - startTime;
console.log("Total time taken : " + timeTaken + " milliseconds");