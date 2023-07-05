const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	total = 0;
  if(array == 0){
    return 0;
  } else {
  return array.reduce((array, total) => array + total)
  }
};

const multiply = function(...args) {
  return args.reduce((args, total) => args * total)
};

const power = function(number, power) {
	return Math.pow(number, power)
};

const factorial = function(number) {
  if(number == 0){
    return 1
  } else {
    return (number * factorial(number - 1))
}
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
