const reverseString = function(string) {
    splitString = string.split('');
    backString = splitString.reverse();
    finalString = backString.join('');
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
