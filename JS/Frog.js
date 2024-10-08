/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {

    let initialStoneIndex = 1
    let initialStep = 1

    for (initialStoneIndex; initialStoneIndex < stones.length; initialStoneIndex++) {
        if(makeStep(stones[initialStoneIndex], stones[initialStoneIndex + 1], initialStep )){
            initialStep = makeStep(stones[initialStoneIndex], stones[initialStoneIndex + 1], initialStep )
        }
        else {
            return false
        }
    }
    return true
};

let makeStep = function (startingStone, destinationStone, step) {
    if (startingStone + step + 1 === destinationStone) {
        return step + 1
    }
    else if (startingStone + step === destinationStone) {
        return step
    }
    else if (startingStone + step - 1 === destinationStone) {
        return step-1
    }
    else {
        return false
    }
}
