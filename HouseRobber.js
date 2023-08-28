/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let oddHousesMoney = 0
    let evenHousesMoney = 0

    for (let houseIndex in nums) {
        if (houseIndex % 2 !== 0) {
            oddHousesMoney += nums[houseIndex]
        }
        else {
            evenHousesMoney += nums[houseIndex]
        }
    }

    if (oddHousesMoney > evenHousesMoney) {
        return oddHousesMoney
    }
    else {
        return evenHousesMoney
    }

};