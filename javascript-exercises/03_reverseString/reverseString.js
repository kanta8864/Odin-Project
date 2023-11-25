const reverseString = function(string) {
    let charArray = string.split("")
    let reversedCharArray = charArray.reverse()
    let result = reversedCharArray.join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;
