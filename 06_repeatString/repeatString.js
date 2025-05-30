const repeatString = function(word, repeatCount) {

    if (repeatCount < 0)
        return "ERROR";

    let combinedString = '';
    for(i = 0; i < repeatCount; i++)
    {
        combinedString += word;
    }

    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
