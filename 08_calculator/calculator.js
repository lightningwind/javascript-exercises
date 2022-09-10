const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce( (total, num) => total + num, 0);
};

const multiply = function(nums) {
	if (nums.length === 0) {
    return 0;
  }
  return nums.reduce((product, num) => product * num); // No initial value supplied!
};

const power = function(a, b) {
  // Solution #1: Iterative ("bottom up")
	// let res = 1;
  // for (let i = 0; i < b; i++) {
  //   res *= a;
  // }
  // return res; 

  // Solution #2: Recursive ("top down")
  // if (b === 0) {
  //   return 1; 
  // }
  // return a * power(a, b - 1);

  return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
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
