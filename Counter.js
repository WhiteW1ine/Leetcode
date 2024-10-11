/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count = n
    return function() {
        var current_count = count
        count++
        return current_count
    };
};


const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

