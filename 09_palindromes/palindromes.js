const palindromes = function (string) {
    let split = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return split.split('').reverse().join('') == split;
    
};


// Do not edit below this line
module.exports = palindromes;
