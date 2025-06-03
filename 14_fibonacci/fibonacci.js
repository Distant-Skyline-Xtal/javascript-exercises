const fibonacci = function(sequenceIndex) {
    if (!isNaN(sequenceIndex))
        sequenceIndex = +sequenceIndex;
    if (sequenceIndex < 0) return "OOPS";
    if (sequenceIndex == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= sequenceIndex; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
