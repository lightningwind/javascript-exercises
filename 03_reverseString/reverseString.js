/* Returns a string that is equal to the 
input string, reversed. */
const reverseString = function(str) {
    /*
    Approach #1:
        - intuition: Since strings in JS
        are immutable, we first convert 
        input string into its array equivalent.
        Then, using two pointers, we reverse
        the array. Finally, we convert the array
        back into a string and return the answer.
    */
   let arr = str.split('');
   reverseArray(arr);
   return arr.join('');
};

/* Reverses array <array>. */
function reverseArray(array) { // O(n)
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        // Swap values
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        i++;
        j--;
    }
}

// Do not edit below this line
module.exports = reverseString;
