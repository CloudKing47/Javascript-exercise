var plusOne = function(digits) {
    for(var i = digits.length; i--;){
        digits[i] = 1 + digits[i];  // capture last digit and add 1 to it
        
        if(digits[i] === 10){ //check if the last digit is 10 after adding
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    digits.unshift(1);
    
    
    return digits;
};

console.log(plusOne([10]))