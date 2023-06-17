const lists = ['a', 'b', 'c'];

for (let i = 0; i < lists.length; i++) {
    console.log(lists[i]); // --> core part of alogrithm is console.log the element
}

// n is the length of dataset length
/*
    if length goes from 3 to 300
    the for loop runs 3 to 300 times
    now this linear scales because is data grows the
    time also grows
    
    O(n)
*/