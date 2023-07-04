const sumAll = function(min, max) {
    let total = 0;
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR'
    } else {
        if(min < max){
        for (let i = min; i <= max; i++){
            total += i;
        }
    } else if (min > max){
        for (let i = min; i >= max; i--){
            total += i;
        }
    } return total
    }
};

// Do not edit below this line
module.exports = sumAll;
