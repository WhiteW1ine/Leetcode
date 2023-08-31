/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let numberToString = x.toString()
    let reversedNumberToString = ''
    let negativeNumber = false

    if(numberToString[0] ==='-') {
        negativeNumber = true
        numberToString = numberToString.slice(1)
    }


    for (let char in numberToString) {

        reversedNumberToString += numberToString[numberToString.length - char - 1]

    }

    if(negativeNumber) {
        reversedNumberToString = '-' + reversedNumberToString
    }


    if (parseInt(reversedNumberToString) >= Math.pow(2,31) - 1 || parseInt(reversedNumberToString) <= -Math.pow(2,31)) {
        return 0
    }
    else {
        return parseInt(reversedNumberToString)
    }

};
