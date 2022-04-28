/* Returns a string equal to string <string>
repeated <num> number of times. If given number
is negative, returns 'ERROR'. */
const repeatString = function(string, num) {
    /*
    Approach #1: Iterative
        - RTC = O(n) since we iterate <n> times
        with O(1) work in each iteration
        - SC = O(1) #clear
        - intuition: Iterate <n> times, adding
        input string to our result

    Approach #2: Recursive
        - RTC = O(n) since there are <n> recursive
        calls each doing O(1) work
        - SC = O(n) due to runtime stack
        - intuition: For the base case, 
        return an empty string, as desired. 
        For the recursive step, return given string
        concatenated with input string repeated n - 1
        times. 
    */
    if (num < 0) { // Edge case
        return 'ERROR';
    }
    let res = '';
    // Add input string <num> number of times 
    for (let i = 0; i < num; i++) { // O(n)
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
