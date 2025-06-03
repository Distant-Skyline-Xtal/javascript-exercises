const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayOfNum) {
  if (arrayOfNum.length == 0)
    return 0;

	return arrayOfNum.reduce(
    (current, newVal) => current + newVal);
};

const multiply = function(arrayOfNum) {
	return arrayOfNum.reduce(
    (current, newVal) => current * newVal)
};

const power = function(a, exponent) {
    return Math.pow(a, exponent);
};

power(2, 4);

const factorial = function(a) {
	let factorial = 1;
  for (i = 1; i < a + 1; i++) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
