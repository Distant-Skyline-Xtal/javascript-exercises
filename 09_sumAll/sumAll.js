const sumAll = function(a, b) {

    if (a < 0 || !Number.isInteger(a))
        return 'ERROR';

    if (b < 0 || !Number.isInteger(b))
        return 'ERROR';

    const lower = a < b ? a : b;
    const higher = a < b ? b : a;
    let sum = 0;
    for (i = lower; i <= higher; i++)
    {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
