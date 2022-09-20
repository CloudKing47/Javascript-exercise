// var removeDuplicates = function(nums) {
//     var trackObj={}
//     var unique=[]
//     var count=0;
//     for(let val of nums) {
//     if(!trackObj[val]) {
//         trackObj[val]=1;
//         unique.push(val)
//     } 
// }


//     nums=unique
//     return nums.length;
// };


var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
            
    }
    console.log("sdsadad",nums[i])
     return ++i;
};
console.log(removeDuplicates([1,2,3,4,4,4,4,2]))