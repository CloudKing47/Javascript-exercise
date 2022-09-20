let nums = [2,10000,10000,10000,2];

function freqEvenNumber(nums) {

let min=Infinity
let obj={}
    for(let val of nums) {
        if(val % 2 == 0) {
            if(nums.length === 1) return val;
            if(obj[val] ===undefined) {
                obj[val] =1
            }else {
             obj[val]++
              
            }
            
            
        } 
    }
    for(let i=0;i<nums.length;i++){
        let strVal=nums[i];
        if(obj[strVal] > 1) {
           if(strVal < min) {
            min=strVal
           }
          
        }
    }
return min === Infinity ? -1 : min;

}

console.log(freqEvenNumber(nums))