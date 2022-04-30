/* Returns a new array containing those elements
in array <array> not present in rest param <args>. */
const removeFromArray = function(array, ...args) {
    return array.filter(ele => !args.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
