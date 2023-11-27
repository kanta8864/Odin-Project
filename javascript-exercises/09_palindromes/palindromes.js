const palindromes = function (string) {
    // remember that \W/ is a non alphanumeric characters. 
    // /g is for gloabal search. (not to stop after first occurance)
    let str = string.toLowerCase().replace(/\W/g, '')
    let charArray = str.split("");
    let reverseCharArray = charArray.reverse();
    let reversedString = reverseCharArray.join("");
    return str === reversedString
};

// Do not edit below this line
module.exports = palindromes;
