/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init
    }
    else {
        for (number in nums) {
            nums[number] = fn(init, nums[number])
            init = nums[number]
        }
        return nums[nums.length-1]
    }
};

let fn = function (accum, curr) {
    return accum + curr
}

let nums = [1,2,3]
let init = 0
let result = reduce(nums, fn, init)
console.log(result)
