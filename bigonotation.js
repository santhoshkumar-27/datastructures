const lists = ['a', 'b', 'c'];
for (let i = 0; i < lists.length; i++) { // runs 18  times for each outer loop items it runs the 3 times
    console.log(lists[i]);
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

// O(n) for single dataset list
// const lists = ['a', 'b', 'c'];
// for (let i = 0; i < lists.length; i++) { // runs square of base n
//     console.log(lists[i], lists[j]);
// }

// o(n * a) for double dataset list
// const lists = ['a', 'b', 'c'];
// const lists1 = [1, 2, 3, 4, 5, 6];
// for (let j = 0; j < lists1.length; j++) { // runs 6 times
//     for (let i = 0; i < lists.length; i++) { // runs 18  times for each outer loop items it runs the 3 times
//         console.log(lists[i], lists1[j]);
//     }
// }

//  O(n^2) for single dataset list of twice running
// const lists = ['a', 'b', 'c'];
// for (let j = 0; j < lists.length; j++) { // runs 3 times
//     for (let i = 0; i < lists.length; i++) { // runs square of base n
//         console.log(lists[i], lists[j]);
//     }
// }

//  O(n^2 + n) for single dataset list of twice running
// const lists = ['a', 'b', 'c'];
// for (let j = 0; j < lists.length; j++) { // runs 3 times
//     for (let i = 0; i < lists.length; i++) { // runs square of base n
//         console.log(lists[i], lists[j]);
//     }
// }
// for (let i = 0; i < lists.length; i++) { // runs square of base n
//     console.log(lists[i], lists[j]);
// }
/*
    we don't want to care about the slowly growing n because it doesn't affect the performance
    we care about n^2 times
*/