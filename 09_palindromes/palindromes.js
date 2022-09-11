// /* Returns true iff string <s> is a palindrome, 
// disregarding spaces and punctuation. */
// const palindromes = function (s) {
//     s = s.toLowerCase(); // preprocess the string
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//         // skip unwanted characters at the beginning of the string
//         while (i < j && !isLetter(s.charAt(i))) { 
//             i++;
//         }
//         // skip unwanted characters at the end of the string
//         while (i < j && !isLetter(s.charAt(j))) { 
//             j--; 
//         }
//         if (s.charAt(i) != s.charAt(j)) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true; 
// };

// function isLetter(s) {
//     // There is no built-in method in JS that checks for letters...
//     // So must do it ourselves 
//     const regex = /^[a-z]$/; // matches exactly one lowercase letter
//     return s.length === 1 && regex.test(s);
// }

// Official solution
const palindromes = function(str) {
    const processedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    const reversedStr = processedStr.split("").reverse().join("");
    return processedStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
