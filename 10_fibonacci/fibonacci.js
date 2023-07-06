const fibonacci = function(number) {
    if(number < 0) return 'OOPS'
    const fib = [0, 1];
    for (let i = 1; i < number; i++){
        fib.push(fib[i] + fib[i - 1]);
    }
    return fib[number]
}

//Fibonacci starts at 0
//Add 1 to 0
//Add 1 to 1
//Add 2 to 1
//So on, adding the new total to the previous number

// Do not edit below this line
module.exports = fibonacci;
