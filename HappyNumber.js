// var num=7


// function HappyNumbers(num) {
//     // if(num.length < 1) return false;
//     let convertedStr= "" + num;
//      console.log("🚀 ~ file: HappyNumber.js ~ line 7 ~ HappyNumbers ~ convertedStr", num.length)
//      let splitStr= convertedStr.length === 1 ?  convertedStr :convertedStr.split('') 
//     for(let i=0;i<splitStr.length;i++) {
     
//      if(parseInt(splitStr[i]) === 1) return true;

//      let add =HappyNumbers(parseInt(splitStr[i]**2) +  parseInt(splitStr[i+1]**2))
//      console.log("🚀 ~ file: HappyNumber.js ~ line 14 ~ HappyNumbers ~ add", add)
// }
// }
// console.log(HappyNumbers(num)) 


const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /**
	 * Not necessary I think, but the OJ algorithm appears
	 * to return false for non-positive numbers also.
	 */
    if (n < 1) return false;
	
	/**
	 * This set will store numbers as we create them.
	 * If we create a number already in the set, we
	 * assume we're in an infinite cycle.
	 */
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }
        if (n == 1) return true;
    }
	
    return false;
};
