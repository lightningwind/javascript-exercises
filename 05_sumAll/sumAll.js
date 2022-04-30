/* Returns the sum of all the integers 
in the range <min{num1,num2}, max{num1,num2}>.
Returns 'ERROR' otherwise. */
const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) return 'ERROR';
    const start = num1 < num2 ? num1 : num2;
    const end = num1 < num2 ? num2 : num1;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
