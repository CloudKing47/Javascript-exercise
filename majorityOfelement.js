var arr=[1,2,2,2,3,4,5,6,7,7];

function major(arr) {
    var thershold= Math.floor(arr.length/2)
   
    var map={};
    for(let i=0;i<arr.length;i++) {
        map[arr[i]] = map[arr[i]] +1 ||1
        if( map[arr[i]] > thershold) return  arr[i];
    }
}

console.log(major(arr)) 




// var majorityElement = function(nums) {
//     var obj = {};
    
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
//         if(obj[nums[i]] > nums.length / 2)  return nums[i];
//     }
    
// };
// console.log("🚀 ~ file: majorityOfelement.js ~ line 26 ~ majorityElement ~ majorityElement", majorityElement(arr))


