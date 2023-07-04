/**
 * @description space complexity of the countDown function O(n)
 * 
 * countDown(5)
 *      |
 *      \/
 * countDown(4)
 *      |
 *      \/
 * countDown(3)
 *      |
 *      \/
 * countDown(2)
 *      |
 *      \/
 * countDown(1)
 *      |
 *      \/
 * countDown(0)
 *      /\ 
 *      |
 *      0
 * 
 */
function countDown(n) {
    console.log(n)
    if (n === 0) {
        return;
    }


    return countDown(n - 1);
}
// every one of the calls exists in the call stack. And each one of these calls takes memory
// space complexity takes o(n) because the size of the function takes linerly
countDown(5)