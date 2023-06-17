const lists = ['a', 'b', 'c'];
const lists1 = [1, 2, 3, 4, 5, 6];
for (let j = 0; j < lists1.length; j++) { // runs 6 times
    for (let i = 0; i < lists.length; i++) { // runs 18  times for each outer loop items it runs the 3 times
        console.log(lists[i], lists1[j]);
    }
}
// --> core part of alogrithm is console.log the each element in the lists array
// n is the length of dataset length of lists variable
// a is the length of dataset length of lists1 variable
/*
    if length goes from 3 to 300
    the for loop runs 3 to 300 times
    now this linear scales because is data grows the
    time also grows

    O(n) for single dataset list
    o(n * a) for double dataset list
*/