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
counter() // 10
counter() // 11
counter() // 12
