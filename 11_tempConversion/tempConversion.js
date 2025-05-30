const convertToCelsius = function(fahrenheitTemp) {
    if (typeof(fahrenheitTemp) !== 'number')
    return 'ERROR';

    return +((fahrenheitTemp - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function(celsiusTemp) {
  if (typeof(celsiusTemp) !== 'number')
    return 'ERROR';

  return +((celsiusTemp * (9 / 5)) + 32).toFixed(1); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
