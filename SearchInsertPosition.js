let nums = [3,5,7,9,10]
let target = 8

function serachInsertPos(nums,target) {

    // console.log(nums.some((item,i)=> nums.indexOf(target) !== -1 ) )
    for(let i=0;i<nums.length;i++) {
        var isAbsent= false
    //    console.log("asdasdasdsad",nums[i]) 
        if(nums[i] === target) {
            return i
        } else {
            isAbsent=true
        }

      
    }

   
    if(isAbsent) {
        nums.push(target)
        nums.sort((a,b) => a-b)
       
    }

    
    return nums.indexOf(target)
 
}

console.log(serachInsertPos(nums,target))



//binary search

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start<=end) {
        const mid = Math.floor((start + end)/2);
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }   
    }
    return start;
};