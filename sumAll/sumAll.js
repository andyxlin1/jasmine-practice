const sumAll = function(firstBound, secondBound) {
    let returnNumber = 0;
    if (typeof firstBound != 'number' || typeof secondBound != 'number') {
        return 'ERROR';
    }
    if (firstBound < 0 || secondBound < 0) {
        return 'ERROR';
    }
    if (firstBound > secondBound) {
        let swap = firstBound;
        firstBound = secondBound;
        secondBound = swap;
    }

    for (let i = firstBound; i <= secondBound; i++) {
        returnNumber+= i;
    }
    return returnNumber;
}

module.exports = sumAll
