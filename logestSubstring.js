
//start = 0
//end =0
//max =0
//create set for storing unique values
//check set map is value is not already aprsent
//if not  add it to map
//check max length add to max variable
//if already value is parsent than delete start and
// increment the start++

var s = "abcabcbb"
function longestSubStringWithoutRepeatingChar(s){

    let start=0;
    let end=0;
    let maxLength=0;

    const uniqueCharMap = new Set();

    while(end < s.length) {
        if(!uniqueCharMap.has(s[end])) {
            uniqueCharMap.add(s[end])
            end++
            maxLength=Math.max(maxLength,uniqueCharMap.size)
        }else {
            uniqueCharMap.delete(s[start]);
            start++
        }
    }
    return maxLength
}


const result=longestSubStringWithoutRepeatingChar(s)
console.log("logestSubstring", result)