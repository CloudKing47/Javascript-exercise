// Find First and Last Position of Element in Sorted Array

let nums = [5,7,7,8,7,10]
let target = 7

// function findFirstAndLast(nums,target) {

//     let left=0;
//     let output=[]
    
//     let end=nums.length-1;
//     console.log("🚀 ~ file: FindFirstAndLast.js ~ line 9 ~ findFirstAndLast ~ left", left,end)

//     while(left <= end) {
//         if(nums[left] === target) {
//             output.push(left);
          
//         } 
//         left++ 
//     }

//     while(end >= left) {
//         if(nums[end] === target) {
//             output.push(end)
           
//         }
//         end++ 
//     }

//     return output.length === 0 ? [-1,-1] : output;
// }

// console.log(findFirstAndLast(nums,target)) //this will faile in one digit array 



//method 2
var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1, mid;
    
    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }
    
    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];
    
    const start = low;
    
    // reset low and high
    low = 0, high = nums.length-1;
    
    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};

console.log(searchRange(nums,target)) 