/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let num in arr) {
        arr[num] = fn(arr[num], parseInt(num))
    }
    return arr;
};
let fn = function(n, i) {
    return n+i;
}
