/**
 * 
 * @param {*} n number to be takens as to run deep
 * @returns 
 * @description time complexity of this function is O(2^n)
 */
function fib(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}


console.log(fib(4))