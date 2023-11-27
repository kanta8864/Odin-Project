const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a,b) => {
    console.log(a, b);
    return a + b;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((a,b) => {
    console.log(a, b);
    return a * b;
  }, 1)
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if(a < 0) return -1;
  else if(a == 0) return 1;
  else return a * factorial(a-1);
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
