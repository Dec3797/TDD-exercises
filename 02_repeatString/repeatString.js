const repeatString = function(string, num) {
    let greeting = '';
    for(let i = 0; i < num; i++){
        greeting += string
    } if (num < 0){
        return 'ERROR'
    } else {
    return greeting
    }
};

// Do not edit below this line
module.exports = repeatString;
